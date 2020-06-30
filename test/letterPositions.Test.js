const assert = require('chai').assert;
const letterPositions = require('../index').letterPositions;

describe("#letterPositions", () => {
  it(`returns true if e is on index 1`, () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });

  it(`returns true if o is on index 4`, () => {
    assert.deepEqual(letterPositions("hello").e, [4]);
  });
});