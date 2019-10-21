<template>
  <div class="scene" ref="scene">
    <div v-if="showGroundPlane">
      <!-- <Ground /> -->
      <Box />
    </div>
    <ParticleMesh
      v-for="p in particlesInfo"
      :key="p.id"
      :particle="p.particle"
      :radius="p.radius"
      :color="p.color"
      :id="p.id"
    />
    <SpringMesh v-for="s in springs" :key="s.id" :spring="s" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import * as THREE from "three";
import { ParticleInfo } from "../manager";
import ParticleMesh from "./ParticleMesh.vue";
import Ground from "./Ground.vue";
import Box from "./Box.vue";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import store from "@/store";
import SpringMesh from "./SpringMesh.vue";

@Component<Scene>({
  components: {
    ParticleMesh,
    Ground,
    Box,
    SpringMesh
  },
  mounted() {
    const el = this.$refs.scene as Element;
    this.setUpScene(el);
    this.renderScene();
  }
})
export default class Scene extends Vue {
  private hemisphereLight = new THREE.HemisphereLight(0xaaaaaa, 0x000000, 0.9);

  private directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);

  private ambientLight = new THREE.AmbientLight(0xdc8874, 0.5);

  private renderer = new THREE.WebGLRenderer({ alpha: true });

  private camera!: THREE.PerspectiveCamera;

  private controls!: OrbitControls;

  scene = new THREE.Scene();

  @Watch("isPlaying")
  onPlayToggled(play: boolean) {
    if (play) {
      this.play();
    } else {
      this.pause();
    }
  }

  private update(dt: number): void {
    this.$store.dispatch("updateParticles", dt);
  }

  private setUpScene(el: Element) {
    this.camera = new THREE.PerspectiveCamera(
      75,
      (el.clientWidth - 350) / el.clientHeight,
      0.1,
      1000
    );
    this.renderer.setSize(el.clientWidth - 350, el.clientHeight);
    this.renderer.setClearColor("#333840", 1);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    this.scene.add(
      this.ambientLight,
      this.hemisphereLight,
      this.directionalLight
    );
    this.directionalLight.position.set(150, 350, 350);

    el.appendChild(this.renderer.domElement);
    this.controls.enablePan = false;
    this.camera.position.z = 5;
  }

  renderScene(): void {
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }

  play(): void {
    this.renderer.setAnimationLoop(() => {
      this.renderScene();
      this.update(0.01);
    });
  }

  pause(): void {
    this.renderer.setAnimationLoop(() => {
      this.renderScene();
    });
  }

  get isPlaying() {
    return this.$store.state.isPlaying;
  }

  get particlesInfo() {
    return this.$store.state.particlesInfo;
  }

  get showGroundPlane() {
    return this.$store.state.showGroundPlane;
  }

  get springs() {
    return this.$store.state.springs;
  }
}
</script>

<style scoped>
.scene {
  width: 100%;
  height: 100%;
}
</style>
