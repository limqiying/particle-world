<template>
  <div class="scene" ref="scene">
      <ParticleMesh
      v-for="p in manager.particles"
      :key="p.id"
      :particle="p"
      :radius = "1"
      />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import * as THREE from "three";
import { ParticleManager } from '../manager';
import ParticleMesh from './ParticleMesh.vue'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

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
      this.directionalLight,
    );
    this.directionalLight.position.set(150, 350, 350);

    el.appendChild(this.renderer.domElement);
    this.controls.enablePan = false;
    this.camera.position.z = 5;

    this.animate();
  },
})
export default class Scene extends Vue {
  private hemisphereLight = new THREE.HemisphereLight(
      0xaaaaaa,
      0x000000,
      0.9
  );

  private directionalLight = new THREE.DirectionalLight(0xffffff, 0.9);

  private ambientLight = new THREE.AmbientLight(0xdc8874, 0.5);

  private renderer = new THREE.WebGLRenderer({ alpha: true });

  private manager: ParticleManager = new ParticleManager();

  private camera!: THREE.PerspectiveCamera;

  private controls!: OrbitControls;

  scene = new THREE.Scene();

  private animate() {
    this.renderer.render(this.scene, this.camera);
    this.controls.update();
    this.manager.updateParticles(0.01);
    requestAnimationFrame(this.animate);
  }

}
</script>

<style scoped>
.scene {
  width: 100%;
  height: 100%;
}
</style>