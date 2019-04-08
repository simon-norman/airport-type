interface Plane {
  land(): any; 
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
}