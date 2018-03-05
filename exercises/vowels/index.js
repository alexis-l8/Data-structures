// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Attempt 3 - 5/3/18
function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  // g - global. Do not stop at first match.
  // i - insensitive. Case insensitive
  // match returns an ARRAY of all matches or NULL.
  return matches ? matches.length : 0;
}


// Attempt 2 - 5/3/18
//function vowels(str) {
  //let counter = 0;
  //const check = ['a', 'e', 'i', 'o', 'u'] //array also has includes method. 
  //// using a array for comparison can be clearer to other devs than a string

  //for(let char of str.toLowerCase()) {
    //if(check.includes(char)) counter++;
  //}

  //return counter;
//}

// Attempt 1 - 02/03/2018
//function vowels(str) {
  //let counter = 0;

  //for (let character of str) {
    //if (character.match(/[aeiou]/gi)) {
      //counter++;
    //} else {
      //null;
    //}
  //}

  //return counter;
//}

module.exports = vowels;
