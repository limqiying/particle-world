import * as THREE from 'three';

export function particleGeometry(radius: number) {
  return new THREE.SphereBufferGeometry(radius);
}