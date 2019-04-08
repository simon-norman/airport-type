import chai = require('chai');
import sinonChai = require('sinon-chai');
import Plane from '../../src/plane';
import sinon = require('sinon')

chai.use(sinonChai);
const expect = chai.expect;

describe('Plane', function() {
  it('should, when instructed to land, change isAirborne status to false', function () {
    const plane = new Plane(true);
    plane.land();

    expect(plane.isAirborne).is.false
  })

  it('should, when instructed to take off, change isAirborne status to true', function () {
    const plane = new Plane(false);
    plane.takeOff();

    expect(plane.isAirborne).is.true
  })
})