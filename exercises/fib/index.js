// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//Attempt 3 - 7/3/18 - Memoization
function slowFib(n) {
  if(n < 2) return n;

  return fib(n-1) + fib (n-2)
}

function memoize(fn) {
  const cache = {}; // store all calls to fast version of fib function

  return function (...args) { // ... assign all arguments as an array to args
    if(cache[args]) return cache [args];

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  }
}

const fib = memoize(slowFib)

// Attempt 2 - 7/3/18 - Recursive solution that is super slow
//function fib(n) {
  //if(n < 2) return n;

  //return fib(n-1) + fib(n-2);
//}

// Attempt 1 - 6/3/18 - Iterative Solution
//function fib(n) {
  //let sequence = [ 0, 1];

  //for (let i = 2; i <= n; i++) {
    //sequence.push(sequence[i - 2] + sequence[i - 1]);
  //}

  //return sequence[n];
//}

module.exports = fib;
