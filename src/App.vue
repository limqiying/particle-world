<template>
  <v-app>
    <Editor />
    <v-content>
      <Scene />
    </v-content>
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
