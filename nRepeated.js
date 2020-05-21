/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function (A) {
  let storage = {};
  for (let i = 0; i < A.length; i++) {
    let temp = A[i];
    if (storage[temp] === 'saved') {
      return temp;
    } else {
      storage[temp] = 'saved';
    }
  }
};
