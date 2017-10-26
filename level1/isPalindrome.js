/**
 * Determines whether the given string is a palindrome, i.e. if you were to reverse the order of the characters inside the string, you would get back the original string.
 */
function isPalindrome() {

}

describe('isPalindrome', function() {
  const assert = require("chai").assert;

  it('works for empty string', function() {
    assert.isTrue(isPalindrome(''));
  });

  it('works for single characters', function() {
    assert.isTrue(isPalindrome('x'));
    assert.isTrue(isPalindrome('c'));
  });

  it('works for double characters', function() {
    assert.isTrue(isPalindrome('xx'));
    assert.isTrue(isPalindrome('gg'));
    assert.isFalse(isPalindrome('af'));
    assert.isFalse(isPalindrome('yt'));
  });

  it('works for words', function() {
    assert.isTrue(isPalindrome('racecar'));
    assert.isFalse(isPalindrome('potato'));
  });
});