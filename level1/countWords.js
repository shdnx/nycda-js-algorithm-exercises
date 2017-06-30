/**
 * Given a string, counts the number of words inside it. Each word is separated by a single space character.
 */
function countWords(text) {
  if (text === "") {
    return 0;
  }

  return text.split(" ").length;
}

describe('countWords', function() {
  const assert = require("chai").assert;

  it('should work for empty strings', function() {
    assert.equal(0, countWords(""));
  });

  it('should work for simple strings', function() {
    assert.equal(3, countWords("a b c"));
    assert.equal(1, countWords("hello"));
    assert.equal(2, countWords("hello world"));
  });
});