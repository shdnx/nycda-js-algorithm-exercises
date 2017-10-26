/**
 * Detects whether a given string is correctly bracketed with '(', ')', '[', ']', '{' and '}'. This means not only that their counts are in balance, but also that the ordering is correct, for example "([hello])" is correct, but "([hello)]" is not.
 * Returns true or false.
 */
function isCorrectlyBracketed(text) {
  const bracketMap = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  function isOpeningBracket(char) {
    return Object.values(bracketMap).indexOf(char) !== -1;
  }

  function isClosingBracket(char) {
    return char in bracketMap;
  }

  function getOpeningBracket(closingChar) {
    return bracketMap[closingChar];
  }

  let bracketStack = [];

  for (const char of text) {
    if (isOpeningBracket(char)) {
      bracketStack.push(char);
    }
    else if (isClosingBracket(char)) {
      // so 'char' is a closing bracket
      // for the text to be correctly bracketed, the opening character at the end of bracketStack has to be the same as the opening counterpart of 'char', i.e. 'openingChar'
      if (bracketStack.length === 0 || bracketStack[bracketStack.length - 1] !== getOpeningBracket(char))
        return false;

      // if it is correct, then pop it (i.e. remove it)
      bracketStack.pop();
    }
  }

  // for text to be correctly bracketed, by this point the bracketStack has to be empty
  return bracketStack.length === 0;
}

describe('isCorrectlyBracketed', function() {
  const assert = require("chai").assert;

  it('should detect any non-bracketed text as correct', function() {
    assert.isTrue(isCorrectlyBracketed(""));
    assert.isTrue(isCorrectlyBracketed("Testing testing"));
    assert.isTrue(isCorrectlyBracketed("Foobar"));
    assert.isTrue(isCorrectlyBracketed("Potato Warriors rejoice!"));
  });

  it('should detect correctly bracketed text', function() {
    // Yes, these are the same tests as in level1/isCorrectlyParanthesised.js.
    assert.isTrue(isCorrectlyBracketed("()"));
    assert.isTrue(isCorrectlyBracketed("(())"));
    assert.isTrue(isCorrectlyBracketed("()()()"));
    assert.isTrue(isCorrectlyBracketed("()(())()"));
    assert.isTrue(isCorrectlyBracketed("(Hello)"));
    assert.isTrue(isCorrectlyBracketed("((Hello))"));
    assert.isTrue(isCorrectlyBracketed("()(Hello)"));
    assert.isTrue(isCorrectlyBracketed("((((Test))))()"));

    assert.isTrue(isCorrectlyBracketed("[]"));
    assert.isTrue(isCorrectlyBracketed("{}"));
    assert.isTrue(isCorrectlyBracketed("()[]"));
    assert.isTrue(isCorrectlyBracketed("([])"));
    assert.isTrue(isCorrectlyBracketed("([]){}"));
    assert.isTrue(isCorrectlyBracketed("([{}]){[()]}"));
    assert.isTrue(isCorrectlyBracketed("test{something}"));
    assert.isTrue(isCorrectlyBracketed("[test]({something})"));
  });

  it('should detect incorrectly bracketed text', function() {
    assert.isFalse(isCorrectlyBracketed("("));
    assert.isFalse(isCorrectlyBracketed("(()"));
    assert.isFalse(isCorrectlyBracketed("(((("));
    assert.isFalse(isCorrectlyBracketed("))()"));
    assert.isFalse(isCorrectlyBracketed("(Test("));
    assert.isFalse(isCorrectlyBracketed("(Hell)o("));

    assert.isFalse(isCorrectlyBracketed("["));
    assert.isFalse(isCorrectlyBracketed("{"));
    assert.isFalse(isCorrectlyBracketed("{{"));
    assert.isFalse(isCorrectlyBracketed("{["));
    assert.isFalse(isCorrectlyBracketed("{)"));
    assert.isFalse(isCorrectlyBracketed("{]"));
    assert.isFalse(isCorrectlyBracketed("[)"));
    assert.isFalse(isCorrectlyBracketed("{]]{"));
  });

  it('should not merely count balances, ordering is also important', function() {
    // Merely counting brackets is not enough! If I open a [ before a {, but try to close ] before I close }, that's also an error!
    assert.isFalse(isCorrectlyBracketed("{[}]"));
    assert.isFalse(isCorrectlyBracketed("{()[}]"));
    assert.isFalse(isCorrectlyBracketed("{hello{"));
    assert.isFalse(isCorrectlyBracketed("{[testing}]"));
    assert.isFalse(isCorrectlyBracketed("test{something{"));
  });
});