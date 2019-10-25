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

export class ParticleStiffSpring implements ParticleForceGenerator {
  private anchor: Vector3;
  private springConstant: number;
  private damping: number;

  constructor(anchor: Vector3, springConstant: number, damping: number = 0.5) {
    this.anchor = anchor;
    this.springConstant = springConstant;
    this.damping = damping;
  }
  updateForce(particle: Particle, dt: number): void {
    if (!particle.hasFiniteMass()) {
      return;
    } else {
      const position: Vector3 = particle.position.clone();
      position.sub(this.anchor);
      const velocity: Vector3 = particle.velocity.clone();
      const gamma: number =
        0.5 * Math.sqrt(4 * this.springConstant - this.damping * this.damping);

      if (gamma == 0) return;
      const c: Vector3 = new Vector3();
      c.addScaledVector(position, this.damping / (2.0 * gamma));
      c.addScaledVector(velocity, 1.0 / gamma);

      const target: Vector3 = new Vector3();
      target.addScaledVector(position, Math.cos(gamma * dt));
      target.addScaledVector(c, Math.sin(gamma * dt));
      target.multiplyScalar(Math.exp(-0.5 * dt * this.damping));

      const force: Vector3 = new Vector3();
      force.subVectors(target, position);
      force.multiplyScalar(1.0 / (dt * dt));
      force.addScaledVector(velocity, -1 * dt);
      force.multiplyScalar(particle.mass);
      particle.addForce(force);
    }
  }
}
