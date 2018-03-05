// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####' 3 + (3-1) = 5
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######' 4 + (4-1) = 7
//   pyramid(5)
//       '    #    ' spaces on either side is (n - row)
//       '   ###   '
//       '  #####  '
//       ' ####### '
//       '#########' 5 + (5-1) = 9

// Attempt 4 - 01/03/2018
function pyramid(n, row = 0, level = '') {
  if(row === n) return;

  if(level.length === (2 * n - 1)) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const midpoint = Math.floor((2 * n - 1) / 2);
  let add;
  if (level.length >= midpoint - row && level.length <= midpoint + row) {
    add = '#';
  } else {
    add = ' ';
  }
  return pyramid(n, row, level + add)
}

// Attempt 3 - 01/03/2018 - this solution if probably the best
//function pyramid(n, row = 0, column = 0) {
  //const x = 2 * n -1;
  //const y = n;
  //const midpoint = Math.floor( x / 2 );
  //let level = '';

  //if ( row === y ) return null;

  //while (column < x ) {
    //if (column >= midpoint - row && column <= midpoint + row ) {
      //level += '#';
      //column++;
    //} else {
      //level += ' ';
      //column++;
    //}
  //};

  //console.log(level);
  //pyramid(n, row + 1);
//}

// Attempt 2 - 01/03/2018
//function pyramid(n) {
  //const midpoint = Math.floor((2 * n - 1)/2);

  //for (let row = 0; row < n; row++) {
    //let level = '';

    //for (let column = 0; column < (2 * n - 1); column++) {
      //if(column >= midpoint - row && column <= midpoint + row) {
        //level += '#'
      //} else {
        //level += ' '
      //}
    //}

    //console.log(level);
  //}
//}

// Attempt 1 - 01/03/2018
//function pyramid(n) {
  //const columns = n + (n-1)

  //for (let row = 1; row <= n; row++ ) {
    //let array = new Array( columns ).fill(' ');

    //for ( let column = 1; column <= array.length; column++ ) {
      //if(column > (n-row) && column <= (columns-n+row)) array[column-1] = '#'
    //}

    //console.log(array.join(''));
  //}
//}

module.exports = pyramid;
