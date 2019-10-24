import Vue from "vue";
import Vuex from "vuex";
import { ParticleInfo, SpringInfo, AnchoredSpringInfo } from "./manager";
import * as ForceGenerator from "./force-generator";
import Particle from "./particle";
import { Spring, createSpring } from "./spring";
import ParticleForceRegistry from "./force-registry";
import ParticleContactResolver from "./particle-contact-resolver";
import {
  ParticleContactGenerator,
  GroundContacts,
  ParticleParticleContacts
} from "./particle-contact-generator";
import ParticleContact from "./particle-contact";
import { Vector3 } from "three";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isPlaying: false,
    particlesInfo: Array<ParticleInfo>(),
    springs: Array<Spring>(),
    forceRegistry: new ParticleForceRegistry(),
    contacts: new Array<ParticleContact>(),
    resolver: new ParticleContactResolver(100),
    contactGenerators: [new ParticleParticleContacts()],
    showGroundPlane: false,
    showBox: false,
    restitution: 0.5
  },
  mutations: {
    setRestitution(state, value: number) {
      state.restitution = value;
    },
    togglePlay(state) {
      state.isPlaying = !state.isPlaying;
    },
    addParticle(state, particleInfo: ParticleInfo) {
      state.particlesInfo.push(particleInfo);
    },
    integrateParticles(state, dt: number) {
      state.particlesInfo.forEach(p => p.particle.integrate(dt));
    },
    stepForward(state) {
      state.particlesInfo.forEach(p => p.particle.stepForward());
    },
    addContactGenerator(state, cg: ParticleContactGenerator) {
      state.contactGenerators.push(cg);
    },
    addGravityForce(state, particle: Particle) {
      const gravity = new ForceGenerator.ParticleGravity();
      state.forceRegistry.add(particle, gravity);
    },
    addSpringForce(state, springInfo: SpringInfo) {
      const force2 = new ForceGenerator.ParticleSpring(
        springInfo.pi1.particle,
        springInfo.springConstant,
        springInfo.restLength
      );
      const force1 = new ForceGenerator.ParticleSpring(
        springInfo.pi2.particle,
        springInfo.springConstant,
        springInfo.restLength
      );
      state.forceRegistry.add(springInfo.pi1.particle, force1);
      state.forceRegistry.add(springInfo.pi2.particle, force2);
      state.springs.push(
        createSpring(
          springInfo.pi1.particle.position,
          springInfo.pi2.particle.position
        )
      );
    },
    addAnchoredSpringForce(state, anchoredSpringInfo: AnchoredSpringInfo) {
      let force;
      if (anchoredSpringInfo.springConstant > 100) {
        force = new ForceGenerator.ParticleStiffSpring(
          anchoredSpringInfo.anchor,
          anchoredSpringInfo.springConstant
        )
      } else {
        force = new ForceGenerator.ParticleAnchoredSpring(
          anchoredSpringInfo.anchor,
          anchoredSpringInfo.springConstant,
          anchoredSpringInfo.restLength
        )
      } 
      state.forceRegistry.add(anchoredSpringInfo.pi1.particle, force);
      state.springs.push(
        createSpring(
          anchoredSpringInfo.pi1.particle.position,
          anchoredSpringInfo.anchor
        )
      );
    },
    updateForces(state, dt: number) {
      state.forceRegistry.updateForces(dt);
    },
    generateContacts(state) {
      state.contactGenerators.forEach(cg => {
        cg.addContact(state.contacts, 100);
      });
    },
    resolveContacts(state, dt: number) {
      state.resolver.iterations = 2 * state.contacts.length;
      state.resolver.resolveContacts(state.contacts, state.contacts.length, dt);
    },
    clearContacts(state) {
      state.contacts.length = 0;
    },
    addGroundPlane(state) {
      if (!state.showGroundPlane) {
        state.showGroundPlane = true;
        state.contactGenerators.push(
          new GroundContacts(new Vector3(0.0, 1.0, 0.0), "y", -1.0)
        );
      }
    },
    addBox(state) {
      if (!state.showGroundPlane) {
        state.showGroundPlane = true;
        state.contactGenerators.push(
          new GroundContacts(new Vector3(0.0, 1.0, 0.0), "y", -1.0)
        );
        state.contactGenerators.push(
          new GroundContacts(new Vector3(1.0, 0.0, 0.0), "x", -10.0)
        );
        state.contactGenerators.push(
          new GroundContacts(new Vector3(-1.0, 0.0, 0.0), "x", 10.0)
        );
        state.contactGenerators.push(
          new GroundContacts(new Vector3(0.0, 0.0, 1.0), "z", -7.5)
        );
        state.contactGenerators.push(
          new GroundContacts(new Vector3(0.0, 0.0, -1.0), "z", 7.5)
        );
      }
    },
    removeGroundPlane(state) {
      state.showGroundPlane = false;
      state.contactGenerators = state.contactGenerators.filter(
        cg => !(cg.constructor == GroundContacts)
      );
    },
    setCollisionDetection(state, value) {
      if (!value) {
        state.contactGenerators.length = 0;
      } else {
        if (state.contactGenerators.length == 0) {
          state.contactGenerators.push(new ParticleParticleContacts());
          state.contactGenerators.push(
            new GroundContacts(new Vector3(0.0, 1.0, 0.0), "y", -1.0)
          );
        }
      }
    }
  },
  actions: {
    togglePlay(context) {
      context.commit("togglePlay");
    },
    addParticle(context, particleInfo: ParticleInfo) {
      context.commit("addParticle", particleInfo);
      if (particleInfo.gravity) {
        context.commit("addGravityForce", particleInfo.particle);
      }
    },
    updateParticles(context, dt: number) {
      context.commit("updateForces", dt);
      context.commit("integrateParticles", dt);
      context.commit("stepForward", dt);
      context.commit("generateContacts");
      context.commit("resolveContacts", dt);
      context.commit("clearContacts");
    },
    generateContacts(context) {
      context.commit("generateContacts");
    },
    removeGroundPlane(context) {
      context.commit("removeGroundPlane");
    },
    showGroundPlane(context) {
      context.commit("addGroundPlane");
    },
    setRestitution(context, value: number) {
      context.commit("setRestitution", value);
    },
    setCollisionDetection(context, value) {
      context.commit("setCollisionDetection", value);
    },
    addBox(context) {
      context.commit("addBox");
    },
    addSpring(context, springInfo: SpringInfo) {
      context.commit("addParticle", springInfo.pi1);
      if (springInfo.pi1.gravity) {
        context.commit("addGravityForce", springInfo.pi1.particle);
      }
      context.commit("addParticle", springInfo.pi2);
      if (springInfo.pi2.gravity) {
        context.commit("addGravityForce", springInfo.pi2.particle);
      }
      context.commit("addSpringForce", springInfo);
    },
    addAnchoredSpring(context, anchoredSpringInfo: AnchoredSpringInfo) {
      context.commit("addParticle", anchoredSpringInfo.pi1);
      if (anchoredSpringInfo.pi1.gravity) {
        context.commit("addGravityForce", anchoredSpringInfo.pi1.particle);
      }
      context.commit("addAnchoredSpringForce", anchoredSpringInfo);
    }
  }
});
