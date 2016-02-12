var code = require('../main');
var expect = require('chai').expect;

describe('', function(){
  it('should tax 10% on the first $10', function(){
    expect(code.taxes(1)).to.equal(0.1);
    expect(code.taxes(10)).to.equal(1);
  });
  it('should tax at 7% on the second $10', function(){
    expect(code.taxes(15)).to.equal(1.05);
  });
  it('should give a false message', function() {
    expect(code.taxes(15)).to.equal(30);
  })
})
