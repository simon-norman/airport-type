interface Plane {
  land(): any; 
  takeOff(): any;
}

interface isStormy {
  (): boolean
}

interface airportParams {
  planes?: Plane[],
  isStormy?: isStormy
}

export default class Airport {
  private planes: Plane[];
  private isStormy: isStormy;

  constructor({ planes = [], isStormy }: airportParams) {
    this.planes = planes;
    this.isStormy = isStormy;
  }

  land = (plane: Plane): void => {
    this.checkCanLand()

    plane.land()
    this.planes.push(plane)
  }

  private checkCanLand = (): any => {
    if (this.isStormy()) { throw 'Cannot land as weather is stormy' }
    if (this.isFull()) { throw 'Cannot land as airport is full' }
  }

  private isFull = (): boolean => {
    return this.planes.length === 10;
  }

  takeOff = (plane: Plane): void => {
    if (this.isStormy()) { throw 'Cannot take off as weather is stormy' }

    plane.takeOff()
    this.planes.splice(this.planes.indexOf(plane), 1)
  }

  hasPlane = (plane: Plane): boolean => {
    return this.planes.includes(plane);
  }
}