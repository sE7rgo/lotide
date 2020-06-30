// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

const takeUntil = function(array, callback) {
  const result = [];
  for (let item of array) {
    if (!callback(item))
      result.push(item);
    else
      break;
  }
  return result;
};
module.exports = takeUntil;

// const assertArraysEqual = require('./index').assertArraysEqual;
// const results1 = takeUntil(data1, x => x < 0);
// const results2 = takeUntil(data2, x => x === ',');

// console.log(results1);
// console.log(results2);
// console.log(assertArraysEqual(results1, [1, 2, 5, 7, "2"]));