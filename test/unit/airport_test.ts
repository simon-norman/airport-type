import chai = require('chai');
import sinonChai = require('sinon-chai');
import Airport from '../../src/airport';
import sinon = require('sinon')

chai.use(sinonChai);
const expect = chai.expect;

describe('Airport', function() {
  it('should, when instructed to land a plane, then instruct that plane to land', function () {
    const airport = new Airport();
    const landSpy = sinon.spy();
    const planeDbl = { land: landSpy }

    airport.land(planeDbl);

    expect(landSpy).calledOnce
  })

  it('should, once plane has landed, add that plane to planes array', function () {
    const airport = new Airport();
    const landSpy = sinon.spy();
    const planeDbl = { land: landSpy }

    airport.land(planeDbl);

    expect(airport.planes[0]).equals(planeDbl)
  })
})