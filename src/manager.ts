import Particle from "./particle";
import { Vector3 } from "three";

export class ParticleManager {
  private _particles: Particle[] = [];

  constructor() {
    const position = new Vector3(0.0, 0.0, 0.0);
    const velocity = new Vector3(0.2, 0.4, 0.0);
    const p = new Particle(0, position, velocity, 2.0);
    p.acceleration = new Vector3(0.0, -0.9, 0.0);
    this._particles.push(p);
  }

  updateParticles(dt: number): void {
    this._particles.forEach(p => p.integrate(dt));
  }

  public get particles(): Particle[] {
    return this._particles;
  }

  public set particles(value: Particle[]) {
    this._particles = value;
  }
}