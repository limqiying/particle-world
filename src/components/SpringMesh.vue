<template>
  <div />
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from "vue-property-decorator";
import { Spring } from "../spring";
import Scene from "./Scene.vue";
import * as THREE from "three";
import { springMaterial } from "../materials";

@Component<SpringMesh>({
  mounted() {
    this.createObject3D();
    this.$parent.scene.add(this.line);
    this.updatePosition();
  }
})
export default class SpringMesh extends Vue {
  $parent!: Scene;
  private line!: THREE.Line;
  private geometry!: THREE.Geometry;

  @Prop({ required: true })
  private spring!: Spring;

  @Watch("spring", { deep: true })
  onChangeP() {
    this.updatePosition();
  }

  createObject3D() {
    this.geometry = new THREE.Geometry();
    this.geometry.verticesNeedUpdate = true;
    this.geometry.vertices.push(this.spring.v1);
    this.geometry.vertices.push(this.spring.v2);
    this.line = new THREE.Line(this.geometry, springMaterial);
  }

  private updatePosition() {
    this.geometry.vertices[0] = this.spring.v1;
    this.geometry.vertices[1] = this.spring.v2;
    this.geometry.verticesNeedUpdate = true;
  }
}
</script>

<style></style>
