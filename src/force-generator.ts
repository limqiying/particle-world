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

export class ParticleSpring implements ParticleForceGenerator {
  private _other: Particle;
  private _springConstant: number;
  private _restLength: number;

  constructor(other: Particle, k: number, ell: number) {
    this._other = other;
    this._springConstant = k;
    this._restLength = ell;
  }

  get restLength(): number {
    return this._restLength;
  }

  set restLength(value: number) {
    this._restLength = value;
  }

  get springConstant(): number {
    return this._springConstant;
  }

  set springConstant(value: number) {
    this._springConstant = value;
  }

  updateForce(particle: Particle, dt: number): void {
    const force: Vector3 = new Vector3();
    force.subVectors(particle.position, this._other.position);
    const magnitude: number =
      this._springConstant * (force.length() - this._restLength);
    force.normalize();
    force.multiplyScalar(-1 * magnitude);
    particle.addForce(force);
  }
}

export class ParticleAnchoredSpring implements ParticleForceGenerator {
  private _anchor: Vector3;
  private _springConstant: number;
  private _restLength: number;

  constructor(anchor: Vector3, k: number, ell: number) {
    this._anchor = anchor;
    this._springConstant = k;
    this._restLength = ell;
  }

  get restLength(): number {
    return this._restLength;
  }

  set restLength(value: number) {
    this._restLength = value;
  }

  get springConstant(): number {
    return this._springConstant;
  }

  set springConstant(value: number) {
    this._springConstant = value;
  }

  updateForce(particle: Particle, dt: number): void {
    const force = new Vector3();
    force.subVectors(particle.position, this._anchor);
    const magnitude: number =
      this._springConstant * (this._restLength - force.length());
    force.normalize();
    force.multiplyScalar(magnitude);
    particle.addForce(force);
  }
}
