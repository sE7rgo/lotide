// const words = ["ground", "control", "to", "major", "tom"];
// const ports = ["YVR", "YYC", "YEG", "YYZ", "YUL"];


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
module.exports = map;
// const assertArraysEqual = require('./index')assertArraysEqual

// const results1 = map(words, word => word[0]);
// const results2 = map(words, word => words.length)
// const results3 = map(ports, port => port[1]);
// const results4 = map(ports, port => ports.length)
// const results5 = map(words, word => words[0].length)
// const results6 = map(ports, port => ports[1].length)

// console.log(assertArraysEqual(results1, results3));
// console.log(assertArraysEqual(results2, results4));
// console.log(assertArraysEqual(results5, results6));

