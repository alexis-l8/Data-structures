// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Attempt 2 - 18/2/18
function steps(n, row = 0, stair='') {
  if(n === row) return;

  if(n === stair.length) {
    console.log(stair);
    return steps(n, row + 1)
  };

  if(stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }

  steps(n, row, stair);
}

// Attempt 1 - 18/2/18
//function steps(n) {
  //let counter = 0;
  //let step = Array(n).fill(' ')

  //while(counter < n) {
    //step[counter] = '#';
    //console.log(step.join(''))
    //counter++;
  //}
//}

module.exports = steps;
