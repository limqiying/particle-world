import Particle from "./particle";

export interface ParticleInfo {
  id: number;
  radius: number;
  color: string;
  particle: Particle;
  gravity: boolean;
}

export interface SpringInfo {
  pi1: ParticleInfo,
  pi2: ParticleInfo,
  springConstant: number,
  restLength: number
}
