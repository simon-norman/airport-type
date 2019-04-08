import chai = require('chai');
import sinonChai = require('sinon-chai');
import isStormy from '../../src/isStormy';
import sinon = require('sinon')

chai.use(sinonChai);
const expect = chai.expect;

describe('Is stormy', function() {
  it('should return sunny 90% of time (when random number returns 1-9)', function () {
    const randomStub = sinon.stub(Math, 'random')
    for(let i = 1; i <= 9; i +=1) {
      randomStub.returns(i)
      expect(isStormy()).equals(false)
    }
  })
})