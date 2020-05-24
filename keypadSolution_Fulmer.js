/*
 * Complete the 'entryTime' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. STRING keypad
 */

function entryTime(s, keypad) {
  // declare time tracking variable
  let totalTime = 0;

  // create array of arrays (rows and columns)
  let keypadArr = [];
  let dividedKeypad = keypad.split('');
  let tempCounter = 0;
  let rowArr = [];
  for (let i = 0; i < dividedKeypad.length + 1; i++) {
    if (tempCounter !== 3) {
      rowArr.push(dividedKeypad[i]);
      tempCounter++;
    } else {
      keypadArr.push(rowArr);
      rowArr = [];
      rowArr.push(dividedKeypad[i]);
      tempCounter = 1;
    }
  }

  //break up s string into an array
  let sArr = s.split('');

  //save "last number" as the first element
  let lastNum = sArr[0];

  //index lookup helper function
  let indexLookup = (board, target) => {
    let indexArr = [];
    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[row].length; col++) {
        //  console.log('col is',col, 'row is',row)
        if (board[row][col] === target) {
          indexArr.push(row, col);
        }
      }
    }
    return indexArr;
  };

  // loop through the s string, starting at index 1
  for (let num = 1; num < sArr.length; num++) {
    //for each element, if last is the same as this, do nothing
    let index = indexLookup(keypadArr, lastNum);
    let lastRow = index[0];
    let lastCol = index[1];

    if (sArr[num] === lastNum) {
      totalTime += 0;
    } else if (lastRow === 1 && lastCol === 1) {
      totalTime++;
    } else {
      let nextIndex = indexLookup(keypadArr, sArr[num]);
      let thisRow = nextIndex[0];
      let thisCol = nextIndex[1];

      if (Math.abs(thisRow - lastRow) > 1 || Math.abs(thisCol - lastCol) > 1) {
        totalTime += 2;
      } else {
        totalTime++;
      }
    }
    lastNum = sArr[num];
  }

  //return time tracker
  return totalTime;
}

//tests
// console.log(entryTime('9191919191', '451238976'));
