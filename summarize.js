function summarize() {
  
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