import { Vector3 } from "three";
import Particle from "./particle";

export default class ParticleContact {
  private _particles: Particle[];
  private _restitution: number;
  private _contactNormal: Vector3;
  private _penetration: number;
  private particleMovement: Vector3[] = [new Vector3(), new Vector3()];
  private twoParticles: boolean;

  constructor(
    particles: Particle[],
    restitution: number,
    contactNormal: Vector3,
    penetration: number = 0
  ) {
    this._particles = particles;
    this._restitution = restitution;
    this._contactNormal = contactNormal;
    this.twoParticles = this._particles.length == 2;
    this._penetration = penetration;
  }

  get particles(): Particle[] {
    return this._particles;
  }

  get restitution(): number {
    return this._restitution;
  }

  get contactNormal(): Vector3 {
    return this._contactNormal;
  }

  get penetration(): number {
    return this._penetration;
  }

  set penetration(value: number) {
    this._penetration = value;
  }

  resolve(dt: number) {
    this.resolveVelocity(dt);
    this.resolveInterpenetration(dt);
  }

  calculateSeparatingVelocity(): number {
    const relativeVelocity: Vector3 = this._particles[0].velocity.clone();
    if (this.twoParticles) {
      relativeVelocity.sub(this._particles[1].velocity);
    }
    return relativeVelocity.dot(this.contactNormal);
  }

  private resolveVelocity(dt: number) {
    const separatingVelocity: number = this.calculateSeparatingVelocity();
    if (separatingVelocity > 0) {
      return;
    } else {
      let newSepVelocity: number = -1 * separatingVelocity * this._restitution;

      const accCausedVelocity: Vector3 = this._particles[0].acceleration.clone();
      if (this.twoParticles)
        accCausedVelocity.sub(this._particles[1].acceleration);
      const accCausedSepVelocity: number =
        dt * accCausedVelocity.dot(this._contactNormal);

      if (accCausedSepVelocity < 0) {
        newSepVelocity += this._restitution * accCausedSepVelocity;
        if (newSepVelocity < 0) newSepVelocity = 0;
      }

      const deltaVelocity: number = newSepVelocity - separatingVelocity;
      const totalInverseMass = this.computeTotalInverseMass();

      if (totalInverseMass <= 0) return;

      const impulsePerIMass = this._contactNormal.clone();
      impulsePerIMass.multiplyScalar(deltaVelocity / totalInverseMass);

      this._particles[0].velocity.addScaledVector(
        impulsePerIMass,
        this._particles[0].inverseMass
      );
      if (this.twoParticles) {
        this._particles[1].velocity.addScaledVector(
          impulsePerIMass,
          -1 * this._particles[1].inverseMass
        );
      }
    }
  }

  private resolveInterpenetration(dt: number) {
    if (this._penetration <= 0) return;
    const totalInverseMass = this.computeTotalInverseMass();
    if (totalInverseMass <= 0) return;

    const movePerIMass = this._contactNormal.clone();
    movePerIMass.multiplyScalar(this._penetration / totalInverseMass);

    this.particleMovement[0] = movePerIMass.clone();
    this.particleMovement[0].multiplyScalar(this._particles[0].inverseMass);

    if (this.twoParticles) {
      this.particleMovement[1] = movePerIMass.clone();
      this.particleMovement[1].multiplyScalar(
        -1 * this._particles[1].inverseMass
      );
    } else {
      this.particleMovement[1].set(0.0, 0.0, 0.0);
    }

    this._particles[0].position.add(this.particleMovement[0]);
    if (this.twoParticles) {
      this._particles[1].position.add(this.particleMovement[1]);
    }
  }

  private computeTotalInverseMass(): number {
    return this.twoParticles
      ? this.particles[0].inverseMass + this.particles[1].inverseMass
      : this.particles[0].inverseMass;
  }
}
