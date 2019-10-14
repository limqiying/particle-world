// materials.ts

import * as THREE from "three";

export const particleMaterial = new THREE.MeshToonMaterial({
  color: "#212121",
  flatShading: true
});
export const springMaterial = new THREE.LineBasicMaterial({
  color: 0xffffff,
  linewidth: 2,
  linecap: "round", //ignored by WebGLRenderer
  linejoin: "round" //ignored by WebGLRenderer
});
