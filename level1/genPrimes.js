/**
 * Generates the first N prime numbers.
 */
function genPrimes() {

}

describe('genPrimes', function() {
  const assert = require("chai").assert;

  it('should be able to generate 0 primes', function() {
    assert.deepEqual([], genPrimes(0));
  });

  it('should be able to generate a single prime', function() {
    assert.deepEqual([ 2 ], genPrimes(1));
  });

  it('should be able to generate a few primes', function() {
    assert.deepEqual([ 2, 3, 5 ], genPrimes(3));
    assert.deepEqual([ 2, 3, 5, 7, 11 ], genPrimes(5));
  });
});