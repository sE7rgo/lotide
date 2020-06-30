const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it(`returns true if [1, 2, 3], [1, 2, 3] are same`, () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it(`returns false if [1, 2, 3], [3, 2, 1] are diff`, () => {
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });

  it(`rreturns true if ["1", "2", "3"], ["1", "2", "3"] are same`, () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });

  it(`returns false if ["1", "2", "3"], ["1", "2", 3] are diff`, () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });
});
