var numTimesAllBlue = function (light) {
  let arrStorage = [];
  let counter = 0;
  for (let index = 0; index < light.length; index++) {
    arrStorage[light[index] - 1] = 1;
    let blue = true;
    for (let i = index; i > -1; i--) {
      if (arrStorage[i] !== 1) {
        blue = false;
        break;
      }
    }
    if (blue === true) {
      counter++;
    }
  }
  return counter;
};
