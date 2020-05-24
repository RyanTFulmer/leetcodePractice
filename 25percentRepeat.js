/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
  if (arr.length <= 2) {
    return arr[0];
  }

  let counter = 1;
  let min = arr.length / 4;
  let last = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (last === arr[i]) {
      counter++;
      if (counter > min) {
        return arr[i];
      } else {
        last = arr[i];
      }
    } else {
      last = arr[i];
      counter = 1;
    }
  }
};
