import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "./registerServiceWorker";
import vuetify from "./plugins/vuetify";
import "vuetify/dist/vuetify.min.css";
import Emitter from "tiny-emitter";

Vue.config.productionTip = false;
const emitter = new Emitter();

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
