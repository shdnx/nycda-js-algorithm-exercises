/**
 * Given a string, returns an object containing attributes for each letter occuring in the string, with the associated value being the number of occurances of that character in the string.
 */
function countLetters(s) {
  const o = {};

  for (c of s.split("")) {
    o[c] = (o[c] || 0) + 1
  }
  return o;
}

describe('countLetters', function() {
  const assert = require("chai").assert;

  it('should work with empty strings', function() {
    assert.deepEqual({}, countLetters(""));
  });

  it('should work on words regardless of case', function() {
    assert.deepEqual({ "p": 1, "o": 2, "t": 2, "a": 1 }, countLetters("potato"));
    assert.deepEqual({ "F": 3, "L": 1, "U": 1, "Y": 1 }, countLetters("FLUFFY"));
  });

  it('should distinguish cases', function() {
    assert.deepEqual({ "M": 1, "o": 2, "C": 1, "O": 1, "W": 1 }, countLetters("MooCOW"));
  });
});