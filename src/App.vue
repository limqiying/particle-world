<template>
  <v-app>
    <Editor />
    <Scene></Scene>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Scene from "./components/Scene.vue";
import Editor from "./components/Editor.vue";
@Component({
  components: {
    Scene,
    Editor
  }
})
export default class App extends Vue {}
</script>
