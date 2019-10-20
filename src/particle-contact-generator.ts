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
