interface Plane {
  land(): any; 
  takeOff(): any;
}

export default class Airport {
  planes: Plane[];

  constructor() {
    this.planes = []
  }

  land(plane: Plane): void {
    plane.land()
    this.planes.push(plane)
  }

  takeOff(plane: Plane): void {
    plane.takeOff()
    this.planes.splice(this.planes.indexOf(plane), 1)
  }

  hasPlane(plane: Plane): boolean {
    return this.planes.includes(plane);
  }
}