import { Vector3 } from "three";

export default class Particle {
  private _position: Vector3;
  private _velocity: Vector3;
  private _acceleration: Vector3 = new Vector3(0.0, 0.0, 0.0);
  private _damping: number = 0.0;
  private _inverseMass: number;
  private _mass: number;
  private _forceAccumulator: Vector3 = new Vector3(0.0, 0.0, 0.0);
  private _nextVelocity: Vector3;
  private _nextPosition: Vector3;

  constructor(position: Vector3, velocity: Vector3, mass: number) {
    this._position = position;
    this._velocity = velocity;
    this._mass = mass;
    this._inverseMass = 1.0 / mass;

    this._nextVelocity = velocity;
    this._nextPosition = position;
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
      const newAcc: Vector3 = this._acceleration.clone();
      newAcc.addScaledVector(this._forceAccumulator, this._inverseMass);
      this._velocity.addScaledVector(newAcc, dt);
    }
    this.clearAccumulartor();
  }

  stepForward(): void {
    console.log(this._position.y);
    console.log(this._velocity.y);
    // this.position = this._nextPosition;
    // this.velocity = this._nextVelocity;
  }
}
