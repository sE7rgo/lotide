const eqArrays = function(firstArray, secondArray) {
  let output;
  for (let i = 0; i < firstArray.length; i++) {
    firstArray[i] === secondArray[i] ? output = true : output = false;
  }
  console.log(output);
  return output;
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


const middle = function(array) {
  let midArr = [];
  let avgIdx = Math.ceil(array.length / 2) - 1;
  if (avgIdx < 1) {
    midArr = [];
  } else if ((array.length % 2) !== 0) {
    midArr.push(array[avgIdx]);
  } else {
    midArr.push(array[avgIdx], array[avgIdx + 1]);
  }
  return midArr;
};
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]