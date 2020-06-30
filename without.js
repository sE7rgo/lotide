const without = function(array, arrayToRemove) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    let result = true;
    for (let j = 0; j < arrayToRemove.length; j++) {
      if (array[i] === arrayToRemove[j]) {
        result = false;
        break;
      }
    }
    if (result) {
      output.push(array[i]);
    }
  }
  return output;
};
module.exports = without;

// const assertArraysEqual = require('./index').assertArraysEqual;

// console.log(without([1, 2, 3], [1])); // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
