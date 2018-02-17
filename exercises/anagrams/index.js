// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Attemp #2 - 17/2/18
function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length) return false;
  for(let key in aCharMap) {
    if(aCharMap[key] !== bCharMap[key]) return false;
  }

  return true;
}

function buildCharMap(str) {
  const charMap = {};
  const cleanStr = str.replace(/[^\w]/g, '').toLowerCase();

  for(let char of cleanStr) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

// Attempt #1 - 12/2/18
//function anagrams(stringA, stringB) {

  //function alphanumeric(string){
    //return string.replace(/[,\W]/g, '')
  //}

  //function lowerCase(string){
    //return string.toLowerCase();
  //}

  //function charMap(string){
    //let charTally = {};

    //for (char of string){
      //charTally[char] = charTally[char] + 1 || 1
    //}

    //return charTally
  //}

  //function reorder(object){
    //return Object.keys(object)
      //.sort()
      //.map((element) => [element]+object[element])
      //.reduce((acc, el) => acc+el)
  //}

  //const charMapA = reorder(charMap(lowerCase(alphanumeric(stringA))))
  //const charMapB = reorder(charMap(lowerCase(alphanumeric(stringB))))

  //return charMapA === charMapB;
//}

module.exports = anagrams;
