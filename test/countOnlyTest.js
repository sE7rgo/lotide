const assert = require('chai').assert;
const countOnly = require('../index').countOnly;

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

describe("#countOnly", () => {
  it(`returns true if "Jason" count equals to 1`, () => {
    assert.strictEqual(result1["Jason"], 1);
  });

  it(`returns true if "Karima" is not between initial array, so undefined`, () => {
      assert.strictEqual(result1["Karima"], undefined); 
  });

  it(`returns true if "Fang" is in initial array, and it's index is 1`, () => {
    assert.strictEqual(result1["Fang"], 2); 
  });
});