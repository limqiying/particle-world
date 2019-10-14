import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isPlaying: false
  },
  mutations: {
    togglePlay(state) {
      state.isPlaying = !state.isPlaying;
    }
  },
  actions: {
    togglePlay(context) {
      context.commit("togglePlay");
    }
  }
});
