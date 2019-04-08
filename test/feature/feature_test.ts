import { expect } from 'chai';
import Airport from '../../src/airport';
import Plane from '../../src/plane';

describe('Airport features', function() {
  beforeEach(function() {
    this.airport = new Airport();
    this.plane = new Plane();
  })
  describe('When instructing airport to land a plane', function() {
    beforeEach(function() {
      this.airport.land(this.plane);
    })

    it('should set plane as landed when airport instructed to land it', function () {  
      expect(this.plane.isAirborne).equals(false);
    })
  
    it('should store plane inside airport once plane is landed', function () {
      expect(this.airport.planes[0]).equals(this.plane);
    })
  })

  describe('When instructing airport to tell a plane to take off', function() {
    it('should set plane as airborne when airport instructed to take it off', function () {  
      this.airport.land(this.plane);
      this.airport.takeOff(this.plane);
      
      expect(this.plane.isAirborne).equals(true);
    })
  })
})