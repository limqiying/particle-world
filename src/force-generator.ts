import Particle from './particle';
import { Vector3 } from 'three'

interface ParticleForceGenerator {
    updateForce: (particle: Particle, dt: number) => void;
}

export class ParticleGravity implements ParticleForceGenerator {
    
    private _gravity: Vector3;

    constructor(gravity: Vector3) {
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