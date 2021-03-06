import { Vector3 } from "three";

export default class Particle {
  private _position: Vector3;
  private _velocity: Vector3;
  private _acceleration: Vector3 = new Vector3(0.0, 0.0, 0.0);
  private _damping: number = 0.9;
  private _inverseMass: number;
  private _mass: number;
  private _forceAccumulator: Vector3 = new Vector3(0.0, 0.0, 0.0);

  constructor(position: Vector3, velocity: Vector3, mass: number) {
    this._position = position;
    this._velocity = velocity;
    this._mass = mass;
    this._inverseMass = 1.0 / mass;
  }

  public get mass(): number {
    return this._mass;
  }

  get position(): Vector3 {
    return this._position;
  }

  get velocity(): Vector3 {
    return this._velocity;
  }

  get acceleration(): Vector3 {
    return this._acceleration;
  }

  get damping(): number {
    return this._damping;
  }

  get inverseMass(): number {
    return this._inverseMass;
  }

  set position(value: Vector3) {
    this._position = value;
  }

  set velocity(value: Vector3) {
    this._velocity = value;
  }

  set acceleration(value: Vector3) {
    this._acceleration = value;
  }

  set damping(value: number) {
    this._damping = value;
  }

  set inverseMass(value: number) {
    this._inverseMass = value;
  }

  clearAccumulartor(): void {
    this._forceAccumulator.set(0.0, 0.0, 0.0);
  }

  addForce(force: Vector3): void {
    this._forceAccumulator.add(force);
  }

  hasFiniteMass(): boolean {
    return this.inverseMass >= 0.0;
  }

  integrate(dt: number): void {
    if (this.inverseMass > 0.0) {
      this._position.addScaledVector(this._velocity, dt);
      this._velocity.addScaledVector(
        this._forceAccumulator,
        dt * this._inverseMass
      );
      const dampingScalar = Math.pow(this._damping, dt);
      this._velocity.multiplyScalar(dampingScalar);
    }
    this.clearAccumulartor();
  }

  stepForward(): void {}
}
