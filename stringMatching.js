var stringMatching = function (words) {
  let results = {};
  for (let i = 0; i < words.length; i++) {
    let splitStrSub = words[i].split('');
    for (let j = 0; j < words.length; j++) {
      if (words[i] !== words[j]) {
        let splitStrBig = words[j].split('');
        for (let k = 0; k < splitStrBig.length; k++) {
          if (splitStrSub[0] === splitStrBig[k]) {
            let isSub = true;
            for (let p = 0; p < splitStrSub.length; p++) {
              if (splitStrSub[p] !== splitStrBig[k + p]) {
                isSub = false;
              }
            }
            if (isSub === true) {
              let res = words[i];
              results[res] = true;
            }
          }
        }
      }
    }
  }
  let finalResults = Object.keys(results);
  return finalResults;
};
