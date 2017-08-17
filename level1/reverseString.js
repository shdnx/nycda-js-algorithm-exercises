/*
 * Given a string, returns a new string that is the same as the original string with the order of its characters reversed.
 * You're not allowed to use String.prototype.reverse().
 * Returns the new string.
 */
function reverseString(s) {
  return s === "" ? "" : reverseString(s.slice(1)) + s[0]
}

describe('reverseString', function() {
  const assert = require("chai").assert;

  it('should work for empty string', function() {
    assert.equal("", reverseString(""));
  });

  it('should work for single-character strings', function() {
    assert.equal("a", reverseString("a"));
    assert.equal(" ", reverseString(" "));
    assert.equal("*", reverseString("*"));
  });

  it('should work on non-trivial strings', function() {
    assert.equal("abc", reverseString("cba"));
    assert.equal("raboof", reverseString("foobar"));
    assert.equal("potato", reverseString("otatop"));
    assert.equal("foof", reverseString("foof"));
  });
});