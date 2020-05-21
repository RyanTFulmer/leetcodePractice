/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str) {
  let strArr = str.split('');
  let results = [];
  for (let i = 0; i < strArr.length; i++) {
    let temp = strArr[i].toLowerCase();
    results.push(temp);
  }
  let finalResults = results.join('');
  return finalResults;
};
