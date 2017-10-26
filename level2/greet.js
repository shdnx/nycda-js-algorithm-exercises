/**
 * Generates a string greeting for the given array of names. Note that the parameter is optional.
 * In the greeting you should use the Oxford comma. For example: greet([ "A", "B", "C" ]) === "Hi A, B, and C!" and not "Hi A, B and C!" (notice the comma before the "and").
 */
function greet() {}

describe('greet', function() {
  const assert = require('chai').assert;

  it('generates a nameless greeting for zero names', function() {
    assert.equal(greet(), "Hi!");
    assert.equal(greet([]), "Hi!");
  });

  it('generates a simple greeting for one name', function() {
    assert.equal(greet([ "Joe" ]), "Hi Joe!");
    assert.equal(greet([ "Potato" ]), "Hi Potato!");
  });

  it('greets all names', function() {
    assert.equal(greet([ "Joe", "Foo", "Bar" ]), "Hi Joe, Foo, and Bar!");
    assert.equal(greet([ "Bla", "Uh", "Baz", "Example" ]), "Hi Bla, Uh, Baz, and Example!");
  });

  it('generates a greeting for Anonymous for empty names', function() {
    assert.equal(greet([ "" ]), "Hi Anonymous!");
    assert.equal(greet([ "Eve", "Frank", "", "Peter" ]), "Hi Eve, Frank, Anonymous, and Peter!");
  });
});