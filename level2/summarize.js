/**
 * Given an array of numbers, it performs some analysis on it and returns the results as an object. The attributes of the object should be as follows:
 * - min: the smallest number in the array
 * - max: the largest number in the array
 * - sum: the sum of all numbers in the array
 * - avg: the average of all numbers in the array
 */
function summarize(nums) {
  if (nums.length === 0) {
    return {
      min: null,
      max: null,
      sum: null,
      avg: null
    };
  }

  let min = nums[0];
  let max = nums[0];
  let sum = 0;

  for (let num of nums) {
    if (num < min) {
      min = num;
    }

    if (num > max) {
      max = num;
    }

    sum += num;
  }

  return {
    min: min,
    max: max,
    sum: sum,
    avg: sum / nums.length
  };
}

describe('summarize', function() {
  const assert = require("chai").assert;

  it('should work for empty array', function() {
    assert.deepEqual(summarize([]), { min: null, max: null, sum: null, avg: null });
  });

  it('should work for trivial arrays', function() {
    for (let i = 0; i < 5; i++) {
      let randomNum = Math.random() * 1000;
      assert.deepEqual(summarize([ randomNum ]), {
        min: randomNum,
        max: randomNum,
        sum: randomNum,
        avg: randomNum
      });
    }
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