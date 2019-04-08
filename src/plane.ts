export default class Plane {
  isAirborne: boolean;

  constructor() {
    this.isAirborne = true;
  }

  land(): void {
    this.isAirborne = false;
  }
}