import ParticleContact from "./particle-contact";
import store from "./store";
import { ParticleInfo } from "./manager";
import { Vector3 } from "three";

export interface ParticleContactGenerator {
  addContact(contacts: ParticleContact[], limit: number): void;
}

export class GroundContacts implements ParticleContactGenerator {
  private upNormal = new Vector3(0.0, 1.0, 0.0);

  addContact(contacts: ParticleContact[], limit: number): void {
    store.state.particlesInfo.forEach((p: ParticleInfo) => {
      if (p.particle.position.y - p.radius <= store.state.groundPos) {
        const pc = new ParticleContact(
          [p.particle],
          0.2,
          this.upNormal,
          store.state.groundPos - (p.particle.position.y - p.radius)
        );
        contacts.push(pc);
      }
    });
  }
}

export class ParticleParticleContacts implements ParticleContactGenerator {
  addContact(contacts: ParticleContact[], limit: number) {
    for (let i = 0; i < store.state.particlesInfo.length; i++) {
      for (let j = i + 1; j < store.state.particlesInfo.length; j++) {
        // if (i != j) {
        const p1 = store.state.particlesInfo[i];
        const p2 = store.state.particlesInfo[j];
        const minDistance = p1.radius + p2.radius;
        const relativePosition = new Vector3();
        relativePosition.subVectors(p2.particle.position, p1.particle.position);
        const distance = relativePosition.length();
        relativePosition.normalize();
        if (distance <= minDistance) {
          const pc = new ParticleContact(
            [p1.particle, p2.particle],
            0.5,
            relativePosition,
            minDistance - distance
          );
          contacts.push(pc);
        }
        // }
      }
    }
  }
}
