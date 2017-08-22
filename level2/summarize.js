/**
 * Given an array of numbers, it performs some analysis on it and returns the results as an object. The attributes of the object should be as follows:
 * - min: the smallest number in the array
 * - max: the largest number in the array
 * - sum: the sum of all numbers in the array
 * - avg: the average of all numbers in the array
 */
function summarize(a) {
  const o = {
    min : null,
    max : null,
    sum : null,
    avg : null
  };

  if (a.length > 0) {
    const minMaxSum = a.reduce((l, v) => [Math.min(l[0], v), Math.max(l[1], v), l[2] + v], [a[0], a[0], 0]);

    o.min = minMaxSum[0];
    o.max = minMaxSum[1];
    o.sum = minMaxSum[2];
    o.avg = o.sum / a.length;
  }

  return o;
}

describe('summarize', function() {
  const assert = require('chai').assert;

  it('should work for empty array', function() {
    assert.deepEqual(summarize([]), {
      min: null,
      max: null,
      sum: null,
      avg: null
    });
  });

  it('should work for trivial arrays', function() {
    assert.deepEqual(summarize([ 42 ]), {
      min: 42,
      max: 42,
      sum: 42,
      avg: 42
    });
  });

  it('should work on simple arrays', function() {
    assert.deepEqual(summarize([ 1, 2, 3, 4, 5 ]), {
      min: 1,
      max: 5,
      sum: 15,
      avg: 3
    });
  });

  it('should work with negative numbers', function() {
    assert.deepEqual(summarize([ -7, 3, 3, 0, 7, 42 ]), {
      min: -7,
      max: 42,
      sum: 48,
      avg: 8
    });
  });
});