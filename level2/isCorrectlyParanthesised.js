/**
 * Detects whether a given string is correctly paranthesised, only considering parantheses, i.e. '(' and ')'.
 * Returns true or false.
 */
function isCorrectlyParanthesised() {}

describe('isCorrectlyParanthesised', function() {
  const assert = require("chai").assert;

  it('should detect any non-paranthesised text as correct', function() {
    assert.isTrue(isCorrectlyParanthesised(""));
    assert.isTrue(isCorrectlyParanthesised("Testing testing"));
    assert.isTrue(isCorrectlyParanthesised("Foobar"));
    assert.isTrue(isCorrectlyParanthesised("Potato Warriors rejoice!"));
  });

  it('should detect correctly paranthesised text', function() {
    assert.isTrue(isCorrectlyParanthesised("()"));
    assert.isTrue(isCorrectlyParanthesised("(())"));
    assert.isTrue(isCorrectlyParanthesised("()()()"));
    assert.isTrue(isCorrectlyParanthesised("()(())()"));
    assert.isTrue(isCorrectlyParanthesised("(Hello)"));
    assert.isTrue(isCorrectlyParanthesised("((Hello))"));
    assert.isTrue(isCorrectlyParanthesised("()(Hello)"));
    assert.isTrue(isCorrectlyParanthesised("((((Test))))()"));
  });

  it('should detect incorrectly paranthesised text', function() {
    assert.isFalse(isCorrectlyParanthesised("("));
    assert.isFalse(isCorrectlyParanthesised(")("));
    assert.isFalse(isCorrectlyParanthesised("(()"));
    assert.isFalse(isCorrectlyParanthesised("))(("));
    assert.isFalse(isCorrectlyParanthesised(")(()"));
    assert.isFalse(isCorrectlyParanthesised("(((("));
    assert.isFalse(isCorrectlyParanthesised("))()"));
    assert.isFalse(isCorrectlyParanthesised("(Test("));
    assert.isFalse(isCorrectlyParanthesised("(Hell)o("));
  });
});