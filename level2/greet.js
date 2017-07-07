/**
 * Generates a string greeting for the given array of names. Note that the parameter is optional.
 * In the greeting you should use the Oxford comma. For example: greet([ "A", "B", "C" ]) === "Hi A, B, and C!" and not "Hi A, B and C!" (notice the comma before the "and").
 */
function greet(names) {
  names = names || [];

  if (names.length === 0)
    return "Hi!";

  function getName(index) {
    return names[index] || "Anonymous";
  }

  if (names.length === 1)
    return "Hi " + getName(0) + "!";

  let result = "Hi ";
  for (let i = 0; i < names.length - 1; i++) {
    result += getName(i) + ", ";
  }

  result += "and " + getName(names.length - 1) + "!";
  return result;
}

describe('greet', function() {
  const assert = require('chai').assert;

  it('generates a nameless greeting for zero names', function() {
    assert.equal("Hi!", greet());
    assert.equal("Hi!", greet([]));
  });

  it('generates a simple greeting for one name', function() {
    assert.equal("Hi Joe!", greet([ "Joe" ]));
    assert.equal("Hi Potato!", greet([ "Potato" ]));
  });

  it('greets all names', function() {
    assert.equal("Hi Joe, Foo, and Bar!", greet([ "Joe", "Foo", "Bar" ]));
    assert.equal("Hi Bla, Uh, Baz, and Example!", greet([ "Bla", "Uh", "Baz", "Example" ]));
  });

  it('generates a greeting for Anonymous for empty names', function() {
    assert.equal("Hi Anonymous!", greet([ "" ]));
    assert.equal("Hi Eve, Frank, Anonymous, and Peter!", greet([ "Eve", "Frank", "", "Peter" ]));
  });
});