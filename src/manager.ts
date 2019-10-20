import Particle from "./particle";

export interface ParticleInfo {
  id: number;
  radius: number;
  color: string;
  particle: Particle;
  gravity: boolean;
}
