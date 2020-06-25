//

const letterPositions = function(string) {
  let result = {};
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      if (result.hasOwnProperty(string[i])) {
        result[string[i]].push(i);
      } else {
        result[string[i]] = [i];
      }
    }
  }
  return result;
};

const assertArraysEqual = function(firstArray, secondArray) {
  let output;
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

const eqArrays = function(firstArray, secondArray) {
  let output;
  for (let i = 0; i < firstArray.length; i++) {
    firstArray[i] === secondArray[i] ? output = true : output = false;
  }
  console.log(output);
  return output;
};

console.log(assertArraysEqual(letterPositions("hello").e, [1]));