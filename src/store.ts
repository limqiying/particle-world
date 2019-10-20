import Vue from "vue";
import Vuex from "vuex";
import { ParticleInfo } from "./manager";
import * as ForceGenerator from "./force-generator";
import Particle from "./particle";
import ParticleForceRegistry from "./force-registry";
import ParticleContactResolver from "./particle-contact-resolver";
import {
  ParticleContactGenerator,
  GroundContacts,
  ParticleParticleContacts
} from "./particle-contact-generator";
import ParticleContact from "./particle-contact";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isPlaying: false,
    particlesInfo: Array<ParticleInfo>(),
    forceRegistry: new ParticleForceRegistry(),
    contacts: new Array<ParticleContact>(),
    resolver: new ParticleContactResolver(100),
    contactGenerators: [new ParticleParticleContacts()],
    showGroundPlane: false,
    groundPos: -3.0
  },
  mutations: {
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
        state.contactGenerators.push(new GroundContacts());
      }
    },
    removeGroundPlane(state) {
      state.showGroundPlane = false;
      state.contactGenerators = state.contactGenerators.filter(
        cg => !(cg.constructor == GroundContacts)
      );
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
    }
  }
});
