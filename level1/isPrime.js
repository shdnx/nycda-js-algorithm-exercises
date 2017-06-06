function isPrime() {

}

describe('isPrime', function() {
  const assert = require("chai").assert;
  
  it('should handle 1', function() {
    assert.isNotOk(isPrime(1));
  });

  it('should handle 2', function() {
    assert.isOk(isPrime(2));
  });

  it('should detect primes', function() {
    assert.isOk(isPrime(3));
    assert.isOk(isPrime(5));
    assert.isOk(isPrime(7));
    assert.isOk(isPrime(23));
  });

  it('should not have false positives', function() {
    assert.isNotOk(isPrime(4));
    assert.isNotOk(isPrime(72));
    assert.isNotOk(isPrime(99));
    assert.isNotOk(isPrime(21));
    assert.isNotOk(isPrime(10));
  });
});