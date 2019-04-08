import { expect } from 'chai';
import Airport from '../../src/airport';
import Plane from '../../src/plane';
import isStormy from '../../src/isStormy';
import sinon = require('sinon')

describe('Airport features', function() {
  beforeEach(function() {
    const plane = new Plane()
    this.airport = new Airport({ isStormy, planes: [plane] });
    this.plane = new Plane(true);
    
    const randomStub = this.randomStub = sinon.stub(Math, 'random');
    randomStub.returns(0)
  })

  afterEach(function() {
    this.randomStub.restore();
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
})