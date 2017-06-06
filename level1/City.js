class City {

}

describe('City', function() {
  const assert = require("chai").assert;

  it('should remember its name', function() {
    assert.equal((new City("Amsterdam")).name, "Amsterdam");
  });

  it('should not be initially linked', function() {
    let ams = new City("Amsterdam");
    let paris = new City("Paris");
    assert.isNotOk(ams.isLinked(paris));
    assert.isNotOk(paris.isLinked(ams));
  });

  it('should be able to get linked', function() {
    let ams = new City("Amsterdam");
    let paris = new City("Paris");

    ams.link(paris);

    // links are symmetric!
    assert.isOk(ams.isLinked(paris));
    assert.isOk(paris.isLinked(ams));
  });

  it('should work with more cities', function() {
    let ams = new City("Amsterdam");
    let london = new City("London");
    let berlin = new City("Berlin");

    ams.link(london);
    london.link(berlin);

    assert.isOk(ams.isLinked(london));
    assert.isOk(london.isLinked(ams));
    assert.isNotOk(ams.isLinked(berlin));
    assert.isNotOk(berlin.isLinked(ams));

    assert.isOk(london.isLinked(berlin));
    assert.isOk(berlin.isLinked(london));
  });
});