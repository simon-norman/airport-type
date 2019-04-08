import chai = require('chai');
import sinonChai = require('sinon-chai');
import Airport from '../../src/airport';
import sinon = require('sinon')

chai.use(sinonChai);
const expect = chai.expect;

describe('Airport', function() {
  beforeEach(function() {
    this.airport = new Airport();
    this.landSpy = sinon.spy();
    this.takeOffSpy = sinon.spy();
    this.planeDbl = { land: this.landSpy, takeOff: this.takeOffSpy }
  })

  describe('When instructed to land a plane,', function() {
    beforeEach(function() {
      this.airport.land(this.planeDbl);
    })

    it('should instruct that plane to land', function () {
      expect(this.landSpy).calledOnce
    })
  
    it('should add that plane to planes array', function () {  
      expect(this.airport.hasPlane(this.planeDbl)).equals(true)
    })
  })

  describe('Given has been instructed to take off a plane,', function() {
    beforeEach(function() {
      this.airport.land(this.planeDbl);
      this.airport.takeOff(this.planeDbl);
    })

    it('should instruct that plane to take off', function () {
      expect(this.takeOffSpy).calledOnce
    })

    it('should remove plane, and be able to confirm that plane is no longer in airport', function () {
      expect(this.airport.hasPlane(this.planeDbl)).equals(false)
    })
  })
})