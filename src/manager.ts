import Particle from "./particle";

export interface ParticleInfo {
  id: Number;
  radius: Number;
  color: String;
  particle: Particle;
  gravity: boolean;
}
