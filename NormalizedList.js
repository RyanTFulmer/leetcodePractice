/**
 *
 * Given a List of Strings replace '&' with "and".
 *
 * For example:
 *
 * Tromeo & Juliet
 * Platoon
 * Kate & Leopold
 * Poltergeist III
 * Harold and Kumar Go to White Castle
 * Clerks II
 *
 * becomes:
 *
 * Tromeo and Juliet
 * Platoon
 * Kate and Leopold
 * Poltergeist III
 * Harold and Kumar Go to White Castle
 * Clerks II
 *
 */

//declare function that takes in an array
let normalizeList = (arrNames) => {
  //declare our final results array
  let finalResults = [];

  //loop through all the elements in the array
  for (let nameIndex = 0; nameIndex < arrNames.length; nameIndex++) {
    //split each element based on spaces
    let splitName = arrNames[nameIndex].split(' ');

    //loop through the newly split array for each group of names
    for (
      let newNameIndex = 0;
      newNameIndex < splitName.length;
      newNameIndex++
    ) {
      //replace the element "&" with "and" if applicable
      if (splitName[newNameIndex] === '&') {
        splitName[newNameIndex] = 'and';
      }
    }

    //sow the patient back up and push them back into the final results array
    let rejoinedNames = splitName.join(' ');
    finalResults.push(rejoinedNames);
  }

  //return our final results array
  return finalResults;
};

//test cases
let example = [
  'Susan & Boyle',
  'Platoon',
  'Kate & Leopold',
  'Poltergeist III',
  'Harold and Kumar Go to White Castle',
  'Clerks II',
];
console.log(normalizeList(example));

//thank you and please let me know if you have any questions!
