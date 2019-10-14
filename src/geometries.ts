import * as THREE from "three";
import { Vector3 } from "three";

export function particleGeometry(radius: number) {
  return new THREE.SphereBufferGeometry(radius);
}

export function springGeometry(v1: Vector3, v2: Vector3) {
  const geometry = new THREE.BufferGeometry();
  const positions = Float32Array.from([v1.x, v1.y, v1.z, v2.x, v2.y, v2.z]);
  geometry.addAttribute("position", new THREE.BufferAttribute(positions, 3));
  return geometry;
}
