/**
 * Generates the first N prime numbers.
 */

function isPrime(candidate, previousPrimes) {
  for (const previousPrime of previousPrimes) {
    if (candidate % previousPrime === 0)
      return false;
  }

  return true;
}

function genPrimes(n) {
  if (n <= 0)
    return [];

  let primes = [ 2 ];
  let candidate = 3;

  while (primes.length < n) {
    if (isPrime(candidate, primes)) {
      primes.push(candidate);
    }

    candidate += 2;
  }

  return primes;
}

describe('genPrimes', function() {
  const assert = require('chai').assert;

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