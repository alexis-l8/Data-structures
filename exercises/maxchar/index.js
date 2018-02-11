// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const tally = {};
  let maxCount = 0;
  let maxChar = '';

  for (character of str) {
    tally[character] = tally[character] + 1 || 1;
  }

  for (character in tally) {
    if (tally[character] > maxCount) {
      maxCount = tally[character];
      maxChar = character;
    }
  }

  return maxChar;
}

module.exports = maxChar;
