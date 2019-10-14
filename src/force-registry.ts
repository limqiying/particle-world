import { ParticleForceGenerator } from "./force-generator";
import Particle from "./particle";

interface ParticleForceRegistration {
  particle: Particle;
  forceGenerator: ParticleForceGenerator;
}

export default class ParticleForceRegistry {
  private registry: ParticleForceRegistration[] = [];

  constructor() {}

  add(particle: Particle, forceGenerator: ParticleForceGenerator): void {
    const newRegistration: ParticleForceRegistration = {
      particle,
      forceGenerator
    } as ParticleForceRegistration;
    this.registry.push(newRegistration);
  }

  updateForces(dt: number): void {
    this.registry.forEach((registration: ParticleForceRegistration) => {
      const forceGenerator = registration.forceGenerator;
      forceGenerator.updateForce(registration.particle, dt);
    });
  }
}
