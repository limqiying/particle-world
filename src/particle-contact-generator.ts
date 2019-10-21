import ParticleContact from "./particle-contact";
import store from "./store";
import { ParticleInfo } from "./manager";
import { Vector3 } from "three";

export interface ParticleContactGenerator {
  addContact(contacts: ParticleContact[], limit: number): void;
}

export class GroundContacts implements ParticleContactGenerator {
  private normal: Vector3;
  private coordinate: string;
  private threshold: number;

  constructor(normal: Vector3, coordinate: string, threshold: number) {
    this.normal = normal;
    this.coordinate = coordinate;
    this.threshold = threshold;
  }

  private getCoordinateComponent(position: Vector3) {
    return this.coordinate == "x"
      ? position.x
      : this.coordinate == "y"
      ? position.y
      : position.z;
  }

  addContact(contacts: ParticleContact[], limit: number): void {
    store.state.particlesInfo.forEach((p: ParticleInfo) => {
      const pos = p.particle.position;
      if (
        (this.threshold > 0 &&
          this.getCoordinateComponent(pos) + p.radius > this.threshold) ||
        (this.threshold < 0 &&
          this.getCoordinateComponent(pos) - p.radius < this.threshold)
      ) {
        const pc = new ParticleContact(
          [p.particle],
          store.state.restitution,
          this.normal,
          this.threshold > 0
            ? this.getCoordinateComponent(pos) + p.radius - this.threshold
            : this.threshold - (this.getCoordinateComponent(pos) - p.radius)
        );
        contacts.push(pc);
      }
      // if (
      //   pos.y - p.radius <= store.state.groundPos &&
      //   pos.x > -200.0 &&
      //   pos.x < 200.0 &&
      //   pos.z > -200.0 &&
      //   pos.z < 200.0
      // ) {
      //   const pc = new ParticleContact(
      //     [p.particle],
      //     store.state.restitution,
      //     this.normal,
      //     store.state.groundPos - (p.particle.position.y - p.radius)
      //   );
      //   contacts.push(pc);
      // }
    });
  }
}

export class ParticleParticleContacts implements ParticleContactGenerator {
  addContact(contacts: ParticleContact[], limit: number) {
    for (let i = 0; i < store.state.particlesInfo.length; i++) {
      for (let j = i + 1; j < store.state.particlesInfo.length; j++) {
        const p1 = store.state.particlesInfo[i];
        const p2 = store.state.particlesInfo[j];
        const minDistance = p1.radius + p2.radius;
        const relativePosition = new Vector3();
        relativePosition.subVectors(p1.particle.position, p2.particle.position);
        const distance = relativePosition.length();
        relativePosition.normalize();
        if (distance <= minDistance) {
          const pc = new ParticleContact(
            [p1.particle, p2.particle],
            store.state.restitution,
            relativePosition,
            minDistance - distance
          );
          contacts.push(pc);
        }
      }
    }
  }
}
