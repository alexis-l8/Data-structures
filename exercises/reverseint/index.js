// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Attempt #2 - 10/2/18
function reverseInt(n) {
  const sign = Math.sign(n);
  const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('');

  return sign * parseInt(reversed);
}

// Attempt #1 - 10/2/18
//function reverseInt(n) {
//const reversed = n =>
//n
//.toString()
//.split('')
//.reverse()
//.join('');

//if (n === 0) {
//return 0;
//} else if (n > 0) {
//return parseInt(reversed(n));
//} else {
//const positive = Math.abs(n);
//return -parseInt(reversed(n));
//}
//}

module.exports = reverseInt;
