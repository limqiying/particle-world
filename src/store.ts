import Vue from "vue";
import Vuex from "vuex";
import { ParticleInfo } from "./manager";
import * as ForceGenerator from "./force-generator";
import Particle from "./particle";
import ParticleForceRegistry from "./force-registry";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isPlaying: false,
    particlesInfo: Array<ParticleInfo>(),
    forceRegistry: new ParticleForceRegistry()
  },
  mutations: {
    togglePlay(state) {
      state.isPlaying = !state.isPlaying;
    },
    addParticle(state, particleInfo: ParticleInfo) {
      state.particlesInfo.push(particleInfo);
    },
    integrateParticles(state, dt) {
      state.particlesInfo.forEach(p => p.particle.integrate(dt));
    },
    stepForward(state) {
      state.particlesInfo.forEach(p => p.particle.stepForward());
    },
    addGravityForce(state, particle: Particle) {
      const gravity = new ForceGenerator.ParticleGravity();
      state.forceRegistry.add(particle, gravity);
    },
    updateForces(state, dt: number) {
      state.forceRegistry.updateForces(dt);
    }
  },
  actions: {
    togglePlay(context) {
      context.commit("togglePlay");
    },
    addParticle(context, particleInfo) {
      context.commit("addParticle", particleInfo);
      if (particleInfo.gravity) {
        context.commit("addGravityForce", particleInfo.particle);
      }
    },
    updateParticles(context, dt: number) {
      context.commit("updateForces", dt);
      context.commit("integrateParticles", dt);
      context.commit("stepForward", dt);
    }
  }
});
