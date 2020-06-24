const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let result = {};
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      if (result.hasOwnProperty(string[i])) {
        result[string[i]] += 1;
      } else {
        result[string[i]] = 1;
      }
    }
  }

  return result;
};

console.log(countLetters("lighthouse in the house"));