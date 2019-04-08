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
      expect(this.airport.planes[0]).equals(this.planeDbl)
    })
  })

  describe('When instructed to take off a plane,', function() {
    it('should instruct that plane to take off', function () {
      this.airport.takeOff(this.planeDbl);
      expect(this.takeOffSpy).calledOnce
    })
  })
})