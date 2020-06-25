const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

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
  output = `🛑🛑🛑 Assertion Failed: ${firstArray} !== ${secondArray}`;
  if (eqArrays(firstArray, secondArray)) {  
   output = `✅✅✅ Assertion Passed: ${firstArray} === ${secondArray}`;
  }
  return output
};

const results1 = takeUntil(data1, x => x < 0);
const results2 = takeUntil(data2, x => x === ',');

console.log(results1);
console.log('---');
console.log(results2);
console.log(assertArraysEqual(results1, [1, 2, 5, 7, "2"]));