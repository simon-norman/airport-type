interface Plane {
  land(): any; 
  takeOff(): any;
}

interface airportParams {
  planes?: Plane[],
  isStormy?: object
}

export default class Airport {
  planes: Plane[];
  isStormy: object;

  constructor({ planes = [], isStormy }: airportParams) {
    this.planes = planes;
    this.isStormy = isStormy;
  }

  land = (plane: Plane): void => {
    if (this.isStormy) { throw 'Cannot land as weather is stormy' }

    plane.land()
    this.planes.push(plane)
  }

  takeOff = (plane: Plane): void => {
    plane.takeOff()
    this.planes.splice(this.planes.indexOf(plane), 1)
  }

  hasPlane = (plane: Plane): boolean => {
    return this.planes.includes(plane);
  }
}