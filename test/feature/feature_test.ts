import { expect } from 'chai';
import Airport from '../../src/airport';
import Plane from '../../src/plane';

describe('Airport features', function() {
  beforeEach(function() {
    const plane = new Plane()
    this.airport = new Airport([plane]);
    this.plane = new Plane(true);
  })

  describe('When instructing airport to land a plane', function() {
    beforeEach(function() {
      this.airport.land(this.plane);
    })

    it('should set plane as landed when airport instructed to land it', function () {  
      expect(this.plane.isAirborne).equals(false);
    })
  
    it('should store plane inside airport once plane is landed', function () {
      expect(this.airport.hasPlane(this.plane)).equals(true);
    })
  })

  describe('Given have instructed airport to tell a plane to take off', function() {
    beforeEach(function() {
      this.airport.land(this.plane);
      this.airport.takeOff(this.plane);
    })

    it('should set plane as airborne when airport instructed to take it off', function () {  
      expect(this.plane.isAirborne).equals(true);
    })

    it('should be able to check that plane is no longer in the airport', function () {  
      expect(this.airport.hasPlane(this.plane)).equals(false);
    })
  })

  describe('Given weather is stormy', function() {
    it('should throw error when attempting to land plane', function () {  
      const createFnWithArg = (fn, argument) => {
        return function() {
          fn(argument)
        }
      };

      const landPlane = createFnWithArg(this.airport.land, this.plane)
      expect(landPlane).to.throw('Cannot land as weather is stormy')
    })
  })
})