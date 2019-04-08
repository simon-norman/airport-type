export default class Plane {
  isAirborne: boolean;

  constructor(isAirborne = false) {
    this.isAirborne = isAirborne;
  }

  land(): void {
    this.isAirborne = false;
  }

  takeOff(): void {
    this.isAirborne = true;
  }
}