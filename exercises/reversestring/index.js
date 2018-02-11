// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Attempt #1 - 8/2/18
//function reverse(str) {
//const array = str.split('');
//const reversedArray = array.reverse();
//const reversedString = reversedArray.join('');
//return reversedString;
//}

// Attempt #2 - 10/2/18
//function reverse(str) {
//return str
//.split('')
//.reverse()
//.join('');
//}

// Attempt #3 (without the use of reverse) - 10/2/18
//function reverse(str) {
//let reversed = '';

//for (let character of str) {
//reversed = character + reversed;
//}
//return reversed;
//}

// Attempt #4 (without the use of reverse) - 10/2/18
function reverse(str) {
  debugger;
  return str.split('').reduce((acc, el) => el + acc, '');
}

reverse('alexis');

module.exports = reverse;
