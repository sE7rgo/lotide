const assertEqual = require('./index').assertEqual

const findKey = function(obj, callBack) {
  for (const key in obj) {
    if (callBack(obj[key])) {
      return key;
    }
  }
};
module.exports = findKey;

// console.log(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2))

// console.log(assertEqual(findKey(), 'Ora'))