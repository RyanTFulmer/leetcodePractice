// RedRover Coding Challenge
// Ryan Fulmer
// June 9, 2020

let dataRestructureFunct = (str) => {
  // Replace parantheses to make it easier to clean. Potential future bug is if the user
  // inputs a ',' or "(" in the fields, but assume this edge case isn't applicable for the
  // current coding challenge
  let removedParaOne = str.replace(/\)/g, ', ');
  let removedParaTwo = removedParaOne.replace(/\(/g, ', ');

  // Split the string into an array to manipulate
  let strArr = removedParaTwo.split(', ');

  // Create variables for all of the data. Perhaps more work than necessary, but I did it in
  // order to make it easier to change later if the output format changes
  let id = strArr[1];
  let name = strArr[2];
  let email = strArr[3];
  let type = strArr[4];
  let typeId = strArr[5];
  let typeName = strArr[6];
  let customFields = strArr[7];
  let c1 = strArr[8];
  let c2 = strArr[9];
  let c3 = strArr[10];
  let externalId = strArr[13];

  // Combine the variables with a template literal, including line breaks based on the
  // assumed desired output
  let result1 = `- ${id}\n- ${name}\n- ${email}\n- ${type}\n  - ${typeId}\n  - ${typeName}\n  - ${customFields}\n    - ${c1}\n    - ${c2}\n    - ${c3}\n- ${externalId}\n`;
  let result2 = `- ${email}\n- ${externalId}\n- ${id}\n- ${name}\n- ${type}\n  - ${customFields}\n    - ${c1}\n    - ${c2}\n    - ${c3}\n  - ${id}\n  - ${name}`;

  // At this point, I would need more information about how exactly you want the output.
  // I structured it as a giant string, but I could easily change it to an object or array based
  // on further guidance
  let finalResults = result1 + result2;

  // Return transformed string
  return finalResults;
};

// Test suite
console.log(
  dataRestructureFunct(
    '(id, name, email, type(id, name, customFields(c1, c2, c3)), externalId)'
  )
);
console.log(
  dataRestructureFunct(
    '(34234, Ryan Fulmer, rfulmer20@gmail.com, type(23, Ryan, customFields(B, CC, DDD)), 6856984)'
  )
);
