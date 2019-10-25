import Particle from "./particle";
<<<<<<< HEAD
import { Vector3 } from "three";
=======
>>>>>>> fix manager exports

export interface ParticleInfo {
  id: number;
  radius: number;
  color: string;
  particle: Particle;
  gravity: boolean;
}

export interface SpringInfo {
  pi1: ParticleInfo;
  pi2: ParticleInfo;
  springConstant: number;
  restLength: number;
}

export interface AnchoredSpringInfo {
  pi1: ParticleInfo;
  anchor: Vector3;
  springConstant: number;
  restLength: number;
}
