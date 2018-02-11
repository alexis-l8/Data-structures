// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Attempt #4 - 10/2/18 (not a great solution as it checks the second half which is repetition)
function palindrome(str) {
  return str.split('').every((char, index) => {
    return char === str[str.length - 1 - index];
  });
}

// Attempt #3 - 10/2/18
//function palindrome(str) {
//const reversed = str.split('').reduce((acc, el) => el + acc);
//return str === reversed;
//}

// Attempt #2 - 10/2/18
//function palindrome(str) {
//let reversed = '';
//for (character of str) {
//reversed = character + reversed;
//debugger;
//}
//return str === reversed;
//}

//palindrome('aba');

// Attempt #1 - 10/2/18
//function palindrome(str) {
//return (
//str ===
//str
//.split('')
//.reverse()
//.join('')
//);
//}

module.exports = palindrome;
