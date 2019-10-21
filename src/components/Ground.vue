<template>
  <div />
</template>

<script lang="ts">
import * as THREE from "three";
import Scene from "./Scene.vue";
import { Component, Prop, Watch, Vue } from "vue-property-decorator";
import { groundGeometry } from "../geometries";
import { groundMaterial } from "../materials";

@Component<Ground>({
  mounted() {
    this.$parent.scene.add(this.object3D);
    this.updatePosition();
  }
})
export default class Ground extends Vue {
  private object3D = new THREE.Mesh(groundGeometry, groundMaterial);

  $parent!: Scene;

  private updatePosition(): void {
    this.object3D.position.y = -3.0;
    this.object3D.rotation.x = Math.PI / 2;
  }
}
</script>
<style></style>
