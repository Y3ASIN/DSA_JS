// function charCount(str) {
//   // make object to return
//   let obj = {};
//   // loop over string, for each character...
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i].toLowerCase();
//     //if character is something else (space, period, etc.) don't do anything
//     if (/[a-z0-9]/.test(char)) {
//       //if the char is a number/letter AND is a key in object, add one to count
//       if (obj[char] > 0) {
//         obj[char]++;
//       }
//       //if the char is a number/letter AND not in object, add it to object and set value to 1
//       else {
//         obj[char] = 1;
//       }
//     }
//   }
//   // return object at end
//   return obj;
// }

function charCount(str) {
  let obj = {};
  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)
  ) {
    return false;
  }
  return true;
}

console.log(charCount("Hello hi"));
