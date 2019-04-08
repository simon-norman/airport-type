import chai = require('chai');
import sinonChai = require('sinon-chai');
import Airport from '../../src/airport';
import sinon = require('sinon')

chai.use(sinonChai);
const expect = chai.expect;

describe('Airport', function() {
  beforeEach(function() {
    this.landSpy = sinon.spy();
    this.takeOffSpy = sinon.spy();
    this.planeDbl = { land: this.landSpy, takeOff: this.takeOffSpy }
  })

  describe('Given weather is sunny and airport is NOT full,', function() {
    beforeEach(function() {
      const isStormyDbl = () => { return false }
      this.airport = new Airport({ isStormy: isStormyDbl });
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

  describe('Given weather is stormy and airport is NOT full', function() {
    const createFnWithArg = (fn, argument) => {
      return function() {
        fn(argument)
      }
    };

    beforeEach(function() {
      const isStormyDbl = () => { return true }
      this.airport = new Airport({ isStormy: isStormyDbl });
    })

    it('should throw error when attempting to land plane', function () {
      const landPlane = createFnWithArg(this.airport.land, this.planeDbl)
      expect(landPlane).to.throw('Cannot land as weather is stormy')
    })

    it('should throw error when attempting to take off plane', function () {
      const takeOffPlane = createFnWithArg(this.airport.takeOff, this.planeDbl)
      expect(takeOffPlane).to.throw('Cannot take off as weather is stormy')
    })
  })

  describe('Given airport is full and weather is NOT stormy', function() {
    it('should throw error when attempting to land plane', function () {
      const createFnWithArg = (fn, argument) => {
        return function() {
          fn(argument)
        }
      };

      const planes = []
      for(let i = 1; i <= 10; i += 1) {
        planes.push(this.planeDbl)
      }
      const isStormyDbl = () => { return false }

      this.airport = new Airport({ planes, isStormy: isStormyDbl });
      const landPlane = createFnWithArg(this.airport.land, this.planeDbl)
      expect(landPlane).to.throw('Cannot land as airport is full')
    })
  })
})