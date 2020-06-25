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


const eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  } else {
    for (let key in obj1) {
      if (Array.isArray(obj1[key])) {
        if (!eqArrays(obj1[key], obj2[key])) {
          return false;
        }
      } else {
        if (obj1[key] !== obj2[key]){
          let value = obj1[key];
          let value2 = obj2[key];
          if (value !== value2){ 
            return false;
          }
        }
      }
    }
  }
  
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertObjectsEqual(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertObjectsEqual(cd, cd2)); // => false