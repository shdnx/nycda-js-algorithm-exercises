/*
 * Checks whether x and y are in epsilon range of each other, that is, whether x and y are the same within a certain margin of error (given by epsilon).
 * You're not allowed to use any functions from Math.
 * Returns true or false.
 */
function equalsWithEpsilon(x, y, epsilon) {

}

describe('equalsWithEpsilon', function() {
  const assert = require("chai").assert;

  it('should work', function() {
    assert.isTrue(equalsWithEpsilon(5, 6, 2));
    assert.isTrue(equalsWithEpsilon(5, 6, 1));
    assert.isFalse(equalsWithEpsilon(5, 6, 0.5));
    assert.isFalse(equalsWithEpsilon(5, 6, 0));

    assert.isTrue(equalsWithEpsilon(7, -7, 100));
    assert.isTrue(equalsWithEpsilon(7, -7, 14));
    assert.isFalse(equalsWithEpsilon(7, -7, 5));
  });

  it('should work same as == with epsilon = 0', function() {
    assert.isTrue(equalsWithEpsilon(1, 1, 0));
    assert.isFalse(equalsWithEpsilon(1, 2, 0));
    assert.isFalse(equalsWithEpsilon(-3, 1, 0));
  });
});