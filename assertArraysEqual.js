const eqArrays = require('./eqArrays')
const assertArraysEqual = function(firstArray, secondArray) {
  eqArrays(firstArray, secondArray) ? 
  console.log(`✅✅✅ Assertion Passed: ${firstArray} === ${secondArray}`) :
  console.log(`🛑🛑🛑 Assertion Failed: ${firstArray} !== ${secondArray}`);
};

module.exports = assertArraysEqual;