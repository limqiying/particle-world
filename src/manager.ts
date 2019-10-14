import Particle from "./particle";
import { Vector3 } from "three";
import ParticleForceRegistry from "./force-registry";
import { ParticleGravity, ParticleSpring } from "./force-generator";

export class ParticleManager {
  private _particles: Particle[] = [];
  private _forceRegistry: ParticleForceRegistry;

  constructor() {
    this._forceRegistry = new ParticleForceRegistry();

    const position1 = new Vector3(2.0, 0.0, 0.0);
    const velocity1 = new Vector3(0.0, 0.0, 0.0);
    const p1 = new Particle(0, position1, velocity1, 2.0);
    this._particles.push(p1);

    const position2 = new Vector3(-1.0, 0.0, 0.0);
    const velocity2 = new Vector3(0.0, 0.0, 3.0);
    const p2 = new Particle(0, position2, velocity2, 1.0);
    this._particles.push(p2);

    // const gravity: ParticleGravity = new ParticleGravity();
    // this._forceRegistry.add(p1, gravity);
    // this._forceRegistry.add(p2, gravity);

    const k: number = 1.0;
    const ell: number = 2.0;
    const spring1: ParticleSpring = new ParticleSpring(p2, k, ell);
    const spring2: ParticleSpring = new ParticleSpring(p1, k, ell);

    this._forceRegistry.add(p1, spring1);
    this._forceRegistry.add(p2, spring2);
  }

  updateParticles(dt: number): void {
    this._forceRegistry.updateForces(dt);
    this._particles.forEach(p => p.integrate(dt));
  }

  public get particles(): Particle[] {
    return this._particles;
  }

  public set particles(value: Particle[]) {
    this._particles = value;
  }
}
