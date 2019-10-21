<template>
  <div />
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from "vue-property-decorator";
import * as THREE from "three";
import Scene from "./Scene.vue";
import {
  boxBaseGeometry,
  boxHorizontalSideGeometry,
  boxVerticalSideGeometry
} from "../geometries";
import { boxMaterial, groundMaterial } from "../materials";

@Component<Box>({
  mounted() {
    this.$parent.scene.add(this.object3D);
    this.createBox();
  }
})
export default class Box extends Vue {
  private object3D: THREE.Object3D = new THREE.Object3D();

  $parent!: Scene;

  private createBox(): void {
    // add base board
    const base: THREE.Object3D = new THREE.Mesh(
      boxBaseGeometry,
      groundMaterial
    );
    base.position.y = -1.25;
    this.object3D.add(base);

    const sideMaterial = boxMaterial("#1B0D03");
    // add side boards
    const left = new THREE.Mesh(boxHorizontalSideGeometry, sideMaterial);
    left.position.x = -10.25;
    this.object3D.add(left);
    const right = new THREE.Mesh(boxHorizontalSideGeometry, sideMaterial);
    right.position.x = 10.25;
    this.object3D.add(right);

    // add front-back boards
    const back = new THREE.Mesh(boxVerticalSideGeometry, sideMaterial);
    back.position.z = 7.75;
    this.object3D.add(back);

    // add front-back boards
    const front = new THREE.Mesh(boxVerticalSideGeometry, sideMaterial);
    front.position.z = -7.75;
    this.object3D.add(front);
  }
}
</script>

<style></style>
