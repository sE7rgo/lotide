const middle = function(array) {
  let midArr = [];
  let avgIdx = Math.ceil(array.length / 2) - 1;
  if (avgIdx < 1) {
    midArr = [];
  } else if ((array.length % 2) !== 0) {
    midArr.push(array[avgIdx]);
  } else {
    midArr.push(array[avgIdx], array[avgIdx + 1]);
  }
  return midArr;
};

module.exports = middle;