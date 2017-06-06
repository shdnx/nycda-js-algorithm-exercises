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
    assert.isOk(equalsWithEpsilon(5, 6, 2));
    assert.isOk(equalsWithEpsilon(5, 6, 1));
    assert.isNotOk(equalsWithEpsilon(5, 6, 0.5));
    assert.isNotOk(equalsWithEpsilon(5, 6, 0));

    assert.isOk(equalsWithEpsilon(7, -7, 100));
    assert.isOk(equalsWithEpsilon(7, -7, 14));
    assert.isNotOk(equalsWithEpsilon(7, -7, 5));
  });

  it('should work same as == with epsilon = 0', function() {
    assert.isOk(equalsWithEpsilon(1, 1, 0));
    assert.isNotOk(equalsWithEpsilon(1, 2, 0));
    assert.isNotOk(equalsWithEpsilon(-3, 1, 0));
  });
});