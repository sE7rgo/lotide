const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;