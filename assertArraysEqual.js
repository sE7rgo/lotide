const eqArrays = function(firstArray, secondArray) {
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

eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false