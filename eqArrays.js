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

module.exports = eqArrays;