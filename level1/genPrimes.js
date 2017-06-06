const isPrime = require("./isPrime.js");

function genPrimes(n) {
  if (n <= 0) {
    return [];
  }

  let results = [ 2 ];
  let candidate = 3;

  while (results.length < n) {
    if (isPrime(candidate)) {
      results.push(candidate);
    }

    candidate += 2;
  }

  return results;
}

describe('genPrimes', function() {
  const assert = require("chai").assert;

  it('should be able to generate 0 primes', function() {
    assert.deepEqual(genPrimes(0), []);
  });

  it('should be able to generate a single prime', function() {
    assert.deepEqual(genPrimes(1), [ 2 ]);
  });

  it('should be able to generate a few primes', function() {
    assert.deepEqual(genPrimes(3), [ 2, 3, 5 ]);
    assert.deepEqual(genPrimes(5), [ 2, 3, 5, 7, 11 ]);
  });
});