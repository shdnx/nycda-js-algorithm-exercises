function countWords() {
  
}

describe('countWords', function() {
  const assert = require("chai").assert;

  it('should work for empty strings', function() {
    assert.equal(countWords(""), 0);
  });

  it('should work for simple strings', function() {
    assert.equal(countWords("a b c"), 3);
    assert.equal(countWords("hello"), 1);
    assert.equal(countWords("hello world"), 2);
  });
});