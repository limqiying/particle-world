<template>
  <div />
</template>

<script lang="ts">
import * as THREE from "three";
import Scene from "./Scene.vue";
import { Component, Prop, Watch, Vue } from "vue-property-decorator";
import { particleGeometry } from "../geometries";
import { particleMaterial } from "../materials";
import Particle from "../particle";

@Component<ParticleMesh>({
  mounted() {
    this.$parent.scene.add(this.object3D);
    this.updatePosition();
  }
})
export default class ParticleMesh extends Vue {
  @Prop({ type: Particle, required: true })
  private particle!: Particle;

  @Prop({ type: Number, required: true })
  private radius: number = 1;

  private object3D = new THREE.Mesh(
    particleGeometry(this.radius),
    particleMaterial
  );

  $parent!: Scene;

  @Watch("particle", { deep: true })
  onChangeP() {
    this.updatePosition();
  }

  private updatePosition() {
    const position: THREE.Vector3 = this.particle.position;
    this.object3D.position.set(position.x, position.y, position.z);
  }
}
</script>
<style></style>
