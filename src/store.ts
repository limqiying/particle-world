import Vue from "vue";
import Vuex from "vuex";
import { ParticleInfo } from "./manager";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isPlaying: false,
    particlesInfo: Array<ParticleInfo>()
  },
  mutations: {
    togglePlay(state) {
      state.isPlaying = !state.isPlaying;
    },
    addParticle(state, particleInfo: ParticleInfo) {
      state.particlesInfo.push(particleInfo);
    }
  },
  actions: {
    togglePlay(context) {
      context.commit("togglePlay");
    },
    addParticle(context, particleInfo) {
      context.commit("addParticle", particleInfo);
    }
  }
});
