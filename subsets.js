/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let results = [[]];

  let treeFunct = (subset, arr) => {
    for (let i = 0; i < arr.length; i++) {
      subset.push(arr[i]);
      results.push(subset);
      console.log('i is', i);
      let newArr = arr.slice(i + 1, arr.length);
      if (newArr.length > 0) {
        treeFunct(subset.slice(0, subset.length), newArr);
      }
    }
  };
  treeFunct([], nums);

  return results;
};

console.log(subsets([1, 2, 3]));
