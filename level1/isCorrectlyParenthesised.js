/**
 * Detects whether a given string is correctly parenthesised, only considering parentheses, i.e. '(' and ')'.
 * Returns true or false.
 */
function isCorrectlyParenthesised(text) {
  let balance = 0;

  for (let char of text) {
    if (char === '(') {
      balance++;
    } else if (char === ')') {
      if (balance === 0)
        return false;

      balance--;
    }
  }

  return balance === 0;
}

describe('isCorrectlyParenthesised', function() {
  const assert = require("chai").assert;

  it('should detect any non-parenthesised text as correct', function() {
    assert.isTrue(isCorrectlyParenthesised(""));
    assert.isTrue(isCorrectlyParenthesised("Testing testing"));
    assert.isTrue(isCorrectlyParenthesised("Foobar"));
    assert.isTrue(isCorrectlyParenthesised("Potato Warriors rejoice!"));
  });

  it('should detect correctly parenthesised text', function() {
    assert.isTrue(isCorrectlyParenthesised("()"));
    assert.isTrue(isCorrectlyParenthesised("(())"));
    assert.isTrue(isCorrectlyParenthesised("()()()"));
    assert.isTrue(isCorrectlyParenthesised("()(())()"));
    assert.isTrue(isCorrectlyParenthesised("(Hello)"));
    assert.isTrue(isCorrectlyParenthesised("((Hello))"));
    assert.isTrue(isCorrectlyParenthesised("()(Hello)"));
    assert.isTrue(isCorrectlyParenthesised("((((Test))))()"));
  });

  it('should detect incorrectly parenthesised text', function() {
    assert.isFalse(isCorrectlyParenthesised("("));
    assert.isFalse(isCorrectlyParenthesised("(()"));
    assert.isFalse(isCorrectlyParenthesised("(((("));
    assert.isFalse(isCorrectlyParenthesised("))()"));
    assert.isFalse(isCorrectlyParenthesised("(Test("));
    assert.isFalse(isCorrectlyParenthesised("(Hell)o("));
  });
});
