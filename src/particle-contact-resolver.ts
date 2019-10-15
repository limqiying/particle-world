import ParticleContact from "./particle-contact";

export default class ParticleContactResolver {
  private _iterations: number;
  private _iterationsUsed: number;

  constructor(iterations: number) {
    this._iterations = iterations;
    this._iterationsUsed = 0;
  }

  get iterations(): number {
    return this._iterations;
  }

  get iterationsUsed(): number {
    return this._iterationsUsed;
  }

  set iterations(value: number) {
    this._iterations = value;
  }

  set iterationsUsed(value: number) {
    this._iterationsUsed = value;
  }

  resolveContacts(
    contactArray: ParticleContact[],
    numContacts: number,
    dt: number
  ) {
    this._iterationsUsed = 0;
    while (this._iterationsUsed < this._iterations) {
      let max: number = Number.MAX_VALUE;
      let maxIndex: number = numContacts;

      for (let i = 0; i < numContacts; i++) {
        const sepVel: number = contactArray[i].calculateSeparatingVelocity();
        if (sepVel < max && (sepVel < 0 || contactArray[i].penetration > 0)) {
          max = sepVel;
          maxIndex = i;
        }
      }

      if (maxIndex == numContacts) break;

      contactArray[maxIndex].resolve(dt);

      this._iterationsUsed++;
    }
  }
}
