<template>
  <v-app>
    <Scene></Scene>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Scene from "./components/Scene.vue";

@Component({
  components: {
    Scene
  }
})
export default class App extends Vue {}
</script>
