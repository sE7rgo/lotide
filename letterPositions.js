const letterPositions = function(string) {
  let result = {};
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      if (result.hasOwnProperty(string[i])) {
        result[string[i]].push(i);
      } else {
        result[string[i]] = [i];
      }
    }
  }findKeyByValue
  return result;
};
module.exports = letterPositions;
