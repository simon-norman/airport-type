interface Plane {
  land(): any; 
}

export default class Airport {
  land(plane: Plane): void {
    plane.land()
  }
}