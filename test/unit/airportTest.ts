import chai = require('chai');
import sinonChai = require('sinon-chai');
import Airport from '../../src/airport';
import sinon = require('sinon')

chai.use(sinonChai);
const expect = chai.expect;

describe('Airport', function() {
  beforeEach(function() {
    const planeDbl1 = { land: () => {}, takeOff: () => {} }
    this.airport = new Airport({ planes: [planeDbl1] });
    this.landSpy = sinon.spy();
    this.takeOffSpy = sinon.spy();
    this.planeDbl2 = { land: this.landSpy, takeOff: this.takeOffSpy }
  })

  describe('When instructed to land a plane,', function() {
    beforeEach(function() {
      this.airport.land(this.planeDbl2);
    })

    it('should instruct that plane to land', function () {
      expect(this.landSpy).calledOnce
    })
  
    it('should add that plane to planes array', function () {  
      expect(this.airport.hasPlane(this.planeDbl2)).equals(true)
    })
  })

  describe('Given has been instructed to take off a plane,', function() {
    beforeEach(function() {
      this.airport.land(this.planeDbl2);
      this.airport.takeOff(this.planeDbl2);
    })

    it('should instruct that plane to take off', function () {
      expect(this.takeOffSpy).calledOnce
    })

    it('should remove plane, and be able to confirm that plane is no longer in airport', function () {
      expect(this.airport.hasPlane(this.planeDbl2)).equals(false)
    })
  })

  describe('Given weather is stormy,', function() {
    it('should throw error when attempting to land plane', function () {
      const createFnWithArg = (fn, argument) => {
        return function() {
          fn(argument)
        }
      };

      const isStormyDbl = () => { return true }
      this.airport = new Airport({ isStormy: isStormyDbl });
      const landPlane = createFnWithArg(this.airport.land, this.planeDbl2)
      expect(landPlane).to.throw('Cannot land as weather is stormy')
    })
  })
})