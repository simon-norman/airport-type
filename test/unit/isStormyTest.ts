import chai = require('chai');
import sinonChai = require('sinon-chai');
import isStormy from '../../src/isStormy';
import sinon = require('sinon')

chai.use(sinonChai);
const expect = chai.expect;

describe('Is stormy', function() {
  beforeEach(function() {
    this.randomStub = sinon.stub(Math, 'random');
  })

  afterEach(function() {
    this.randomStub.restore();
  })

  it('should return sunny 90% of time (when random number returns 1-9)', function () {
    for(let i = 0; i <= 0.8; i += 0.1) {
      this.randomStub.returns(i)
      expect(isStormy()).equals(false)
    }
  })

  it('should return stormy 10% of time (when random number returns 10)', function () {
    this.randomStub.returns(0.9)
    expect(isStormy()).equals(true)
  })
})