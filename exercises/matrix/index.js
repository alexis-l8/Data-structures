// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// Attempt 2 - 5/3/18
function matrix(n) {
	let array = [];
	for (let i = 0; i < n; i++) {
		array.push([]);
	}

	let counter = 1;
	let startColumn = 0;
	let endColumn = n - 1;
	let startRow = 0;
	let endRow = n - 1;

	while (startRow <= endRow && startColumn <= endColumn) {
	  // top row
		for (let i = startColumn; i <= endColumn; i++) {
			array[startRow][i] = counter;
			counter++;
		}
		startRow++;

    //right column
		for (let i = startRow; i <= endRow; i++) {
			array[i][endColumn] = counter;
			counter++;
		}
		endColumn--;

    //bottom row
		for (let i = endColumn; i >= startColumn; i--) {
			array[endRow][i] = counter;
			counter++;
		}
		endRow--;

    //left column
		for (let i = endRow; i >= startRow; i--) {
			array[i][startColumn] = counter;
			counter++;
		}
		startColumn++;
	}

	return array;
}

// Attempt 1 - 5/3/18
//function matrix(n) {
  //let array = [];
  //for (let i = 0; i < n; i++) {
    //array.push(Array(n).fill(''));
  //}

  //let counter = 1;
  //let row = 0;
  //let column = 0;
  //let loops = n;

  //function clockwise() {
    //for (let layer = 0 + row; layer < n - row; layer++) {
      //for (let item = 0 + column; item < n - column; item++) {
        //if (layer === 0 + row) {
          //array[layer][item] = counter;
          //counter += 1;
        //} else if (
          //item === n - 1 - column &&
          //layer !== array.length - 1 - column
        //) {
          //array[layer][n - 1 - column] = counter;
          //counter += 1;
        //}
      //}
    //}
  //}

  //function antiClockwise() {
    //for (let layer = 0 + row; layer < n - row; layer++) {
      //array[layer].reverse();
      //for (let item = 0 + column; item < n - column; item++) {
        //if (layer === 0 + row) {
          //array[layer][item] = counter;
          //counter += 1;
        //} else if (
          //item === n - 1 - column &&
          //layer !== array.length - 1 - column
        //) {
          //array[layer][n - 1 - column] = counter;
          //counter += 1;
        //}
      //}
      //array[layer].reverse();
    //}

    //row++;
    //column++;
  //}

  //if (n % 2 === 0) {
    //while (loops ) {
      //clockwise();
      //array.reverse();
      //antiClockwise();
      //array.reverse();
      //loops--;
    //}
  //} else {
    //while (loops > Math.ceil(n/2)) {
      //clockwise();
      //array.reverse();
      //antiClockwise();
      //array.reverse();
      //loops--;
    //}
    //clockwise();
  //}

  //return array;
//}

module.exports = matrix;
