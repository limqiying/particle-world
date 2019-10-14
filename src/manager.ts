import Particle from "./particle";
import { Vector3 } from "three";
import ParticleForceRegistry from "./force-registry";
import { Spring, createSpring } from "./spring";
import {
  ParticleGravity,
  ParticleSpring,
  ParticleAnchoredSpring
} from "./force-generator";

export class ParticleManager {
  private _particles: Particle[] = [];
  private _springs: Spring[] = [];
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

    const gravity: ParticleGravity = new ParticleGravity();
    // this._forceRegistry.add(p1, gravity);
    this._forceRegistry.add(p2, gravity);

    const k: number = 1.0;
    const ell: number = 2.1;
    const anchor: Vector3 = new Vector3(0.0, 0.0, 0.0);
    const spring1: ParticleAnchoredSpring = new ParticleAnchoredSpring(
      anchor,
      k,
      ell
    );
    const springObject: Spring = createSpring(p1.position, anchor);
    this._springs.push(springObject);
    // const spring2: ParticleSpring = new ParticleSpring(p1, k, ell);

    this._forceRegistry.add(p1, spring1);
    // this._forceRegistry.add(p2, spring2);
  }

  updateParticles(dt: number): void {
    this._forceRegistry.updateForces(dt);
    this._particles.forEach(p => p.integrate(dt));
  }

  public get particles(): Particle[] {
    return this._particles;
  }

  public get springs(): Spring[] {
    return this._springs;
  }
}
