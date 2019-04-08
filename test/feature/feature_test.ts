import { expect } from 'chai';
import Airport from '../../src/airport';
import Plane from '../../src/plane';

describe('Airport features', function() {
  it('should set plane as landed when airport instructed to land it', function () {
    const plane = new Plane();
    const airport = new Airport();

    airport.land(plane);

    expect(plane.isAirborne).equals(false);
  })
})