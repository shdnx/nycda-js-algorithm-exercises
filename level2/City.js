/**
 * Represents a city. Cities can be "linked" together, meaning that you can reach one city from the other. This is always a symmetric relation, meaning that if you can reach city X from Y, then you can also reach Y from X.
 */
class City {

}

describe('City', function() {
  const assert = require('chai').assert;

  it('should remember its name', function() {
    assert.equal((new City("Amsterdam")).name, "Amsterdam");
  });

  it('should not be initially linked', function() {
    let ams = new City("Amsterdam");
    let paris = new City("Paris");
    assert.isFalse(ams.isLinked(paris));
    assert.isFalse(paris.isLinked(ams));
  });

  it('should be able to get linked', function() {
    let ams = new City("Amsterdam");
    let paris = new City("Paris");

    ams.link(paris);

    // links are symmetric!
    assert.isTrue(ams.isLinked(paris));
    assert.isTrue(paris.isLinked(ams));
  });

  it('should work with more cities', function() {
    let ams = new City("Amsterdam");
    let london = new City("London");
    let berlin = new City("Berlin");

    ams.link(london);
    london.link(berlin);

    assert.isTrue(ams.isLinked(london));
    assert.isTrue(london.isLinked(ams));
    assert.isFalse(ams.isLinked(berlin));
    assert.isFalse(berlin.isLinked(ams));

    assert.isTrue(london.isLinked(berlin));
    assert.isTrue(berlin.isLinked(london));
  });
});