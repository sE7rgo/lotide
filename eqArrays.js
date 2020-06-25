const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(firstArray, secondArray) {
  let output;
  if (firstArray.length !== secondArray.length){
    return false;
  }
  for (let i = 0; i < firstArray.length; i++) {
    firstArray[i] === secondArray[i] ? output = true : output = false;
  }
  return output;
};


const assertArraysEqual = function(firstArray, secondArray) {
  let output;
  if (firstArray.length !== secondArray.length) {
    return false;
  }
  for (let i = 0; i < firstArray.length; i++) {

    if (firstArray[i] === secondArray[i]) {
      
      output = `✅✅✅ Assertion Passed: ${firstArray} === ${secondArray}`;
    } else {
      output = `🛑🛑🛑 Assertion Failed: ${firstArray} !== ${secondArray}`;
    }
  }
  console.log(output);
  return output;
};

function without(source, toRemove) {
  return source.filter(function(value) {
      return toRemove.indexOf(value) == -1;
  });
}

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS