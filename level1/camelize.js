function camelize(text) {
  let result = "";

  for (let i = 0; i < text.length; i++) {
    if (i % 2 === 0) {
      result += text[i].toUpperCase();
    }
    else {
      result += text[i].toLowerCase();
    }
  }

  return result;
}

describe('camelize', function() {
  const assert = require("chai").assert;

  it('should work on empty strings', function() {
    assert.equal(camelize(""), "");
  });

  it('should work on single characters', function() {
    assert.equal(camelize("a"), "A");
    assert.equal(camelize("q"), "Q");
    assert.equal(camelize("5"), "5");
    assert.equal(camelize(" "), " ");
  });

  it('should work for pairs', function() {
    assert.equal(camelize("fo"), "Fo");
    assert.equal(camelize("AB"), "Ab");
    assert.equal(camelize("cY"), "Cy");
    assert.equal(camelize("Xd"), "Xd");
  });

  it('should work for longer strings', function() {
    assert.equal(camelize("lol"), "LoL");
    assert.equal(camelize("potato warrior"), "PoTaTo wArRiOr");
  });
});