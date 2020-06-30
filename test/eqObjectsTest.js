const assert = require('chai').assert;
const eqObjects = require('../index').eqObjects;

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

describe("#eqObjects", () => {
  it(`returns true if { c: "1", d: ["2", 3] } === { d: ["2", 3], c: "1" }`, () => {
    assert.deepEqual(eqObjects(cd, dc), true);
  });

  it(`returns true if { c: "1", d: ["2", 3] } !== { c: "1", d: ["2", 3, 4] }`, () => {
    assert.deepEqual(eqObjects(cd, cd2), false);
  });
});