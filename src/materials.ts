// materials.ts

import * as THREE from "three";
import image from "./assets/grass.jpg"

export function particleMaterial(color: string): THREE.MeshToonMaterial {
  return new THREE.MeshToonMaterial({
    color: color,
    flatShading: true
  });
}

export const springMaterial = new THREE.LineBasicMaterial({
  color: 0xffffff,
  linewidth: 2,
  linecap: "round", //ignored by WebGLRenderer
  linejoin: "round" //ignored by WebGLRenderer
});

const texture = new THREE.TextureLoader().load(image)
export const groundMaterial = new THREE.MeshLambertMaterial({
  // color: "#53843f",
  map: texture,
  side: THREE.DoubleSide
});
