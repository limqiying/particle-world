import Particle from "./particle";
import { Vector3 } from "three";

export interface ParticleForceGenerator {
  updateForce: (particle: Particle, dt: number) => void;
}

export class ParticleGravity implements ParticleForceGenerator {
  private _gravity: Vector3;

  constructor(gravity: Vector3 = new Vector3(0.0, -9.81, 0.0)) {
    this._gravity = gravity;
  }

  updateForce(particle: Particle, dt: number): void {
    if (particle.hasFiniteMass()) {
      const gravityCopy = this._gravity.clone();
      gravityCopy.multiplyScalar(particle.mass);
      particle.addForce(gravityCopy);
    }
  }
}
