import { expect } from 'chai';
import Airport from '../../src/airport';
import Plane from '../../src/plane';

describe('Airport features', function() {
  describe('When instructing airport to land a plane', function() {
    beforeEach(function() {
      this.airport = new Airport();
      this.plane = new Plane();
      this.airport.land(this.plane);
    })

    it('should set plane as landed when airport instructed to land it', function () {  
      expect(this.plane.isAirborne).equals(false);
    })
  
    it('should store plane inside airport once plane is landed', function () {
      expect(this.airport.planes[0]).equals(this.plane);
    })
  })
})