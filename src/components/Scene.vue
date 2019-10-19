<template>
  <div class="scene" ref="scene">
    <ParticleMesh
      v-for="p in particlesInfo"
      :key="p.id"
      :particle="p.particle"
      :radius="p.radius"
      :color="p.color"
      :id="p.id"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import * as THREE from "three";
import { ParticleInfo } from "../manager";
import ParticleMesh from "./ParticleMesh.vue";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import store from "@/store";
import emitter from "tiny-emitter";

@Component<Scene>({
  components: {
    ParticleMesh
  },
  mounted() {
    const el = this.$refs.scene as Element;
    this.camera = new THREE.PerspectiveCamera(
      75,
      el.clientWidth / el.clientHeight,
      0.1,
      1000
    );
    this.renderer.setSize(el.clientWidth, el.clientHeight);
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

    this.renderScene();
  }
})
export default class Scene extends Vue {
  private hemisphereLight = new THREE.HemisphereLight(0xaaaaaa, 0x000000, 0.9);

  private directionalLight = new THREE.DirectionalLight(0xffffff, 0.3);

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
}
</script>

<style scoped>
.scene {
  width: 100%;
  height: 100%;
}
</style>
