const maxChar = require('./index.js');

test('maxChar is a function', () => {
  expect(typeof maxChar).toBe('function');
});

test('Finds the most frequent letter in a string', () => {
  expect(maxChar('a')).toEqual('a');
  expect(maxChar('ab')).toEqual('a');
  expect(maxChar('abcdefghijklmnaaaaa')).toEqual('a');
});

test('Works with numbers in the string', () => {
  expect(maxChar('a1b2c3333')).toEqual('3');
  expect(maxChar('ab1c1d1e1f1g1')).toEqual('1');
});
