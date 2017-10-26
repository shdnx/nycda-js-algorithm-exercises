/**
 * Determines whether the given number is a prime number, i.e. it is not divisible by any integers other than 1 and itself.
 * Returns true or false.
 */
function isPrime() {

}

describe('isPrime', function() {
  const assert = require("chai").assert;

  it('should handle 1', function() {
    assert.isFalse(isPrime(1));
  });

  it('should handle 2', function() {
    assert.isTrue(isPrime(2));
  });

  it('should detect primes', function() {
    assert.isTrue(isPrime(3));
    assert.isTrue(isPrime(5));
    assert.isTrue(isPrime(7));
    assert.isTrue(isPrime(23));
  });

  it('should not have false positives', function() {
    assert.isFalse(isPrime(4));
    assert.isFalse(isPrime(72));
    assert.isFalse(isPrime(99));
    assert.isFalse(isPrime(21));
    assert.isFalse(isPrime(10));
  });
});