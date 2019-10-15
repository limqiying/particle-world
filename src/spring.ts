import { Vector3 } from "three";

let idGenerator = 0;

export interface Spring {
  id: number;
  v1: Vector3;
  v2: Vector3;
}

export function createSpring(v1: Vector3, v2: Vector3) {
  return {
    id: idGenerator++,
    v1,
    v2
  } as Spring;
}
