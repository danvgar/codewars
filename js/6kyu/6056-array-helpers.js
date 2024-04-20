// https://www.codewars.com/kata/5503013e34137eeeaa001648/train/javascript
// First Attempt - Apr 19, 2024 (13m 6s)

// =============
// Problem
// =============

// This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

// Explanation:

// square() must return a copy of the array, containing all values squared
// cube() must return a copy of the array, containing all values cubed
// average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
// sum() must return the sum of all array values
// even() must return an array of all even numbers
// odd() must return an array of all odd numbers
// Note: the original array must not be changed in any case!

// Example
// var numbers = [1, 2, 3, 4, 5];

// numbers.square();  // must return [1, 4, 9, 16, 25]
// numbers.cube();    // must return [1, 8, 27, 64, 125]
// numbers.average(); // must return 3
// numbers.sum();     // must return 15
// numbers.even();    // must return [2, 4]
// numbers.odd();     // must return [1, 3, 5]

// ==============
// PREP
// ==============

// Inputs: integer array
// Outputs: series of updates to Array class methods that produce a new array without manipulating the original array.
// Edge-Cases:
// Will interger array ever not be a number or array? (e.g. numbers as strings?)
// Will input every be empty array, null, etc?

// ==============
// Attempt 1
// ==============

var numbers = [1, 2, 3, 4, 5];

// SQUARE
Array.prototype.square = function () {
  //   Goal is copy of array with values squared
  return this.map((item) => item ** 2);
};
console.log(numbers.square(), "Expected: [1, 4, 9, 16, 25]");

// CUBE
Array.prototype.cube = function () {
  // //   Goal is copy of array with values cubed
  return this.map((item) => item ** 3);
};
console.log(numbers.cube(), "Expected: [1, 8, 27, 64, 125]");

// SUM
Array.prototype.sum = function () {
  // //   Goal is sum returned
  return this.reduce((acc, c) => acc + c, 0);
};
console.log(numbers.sum(), "Expected: 15");

// AVERAGE
Array.prototype.average = function () {
  // //   Goal is average returned.
  // //   Empty array must return NaN
  return this.length === 0 ? NaN : this.sum() / this.length;
};
console.log(numbers.average(), "Expected: 3");

// EVEN
Array.prototype.even = function () {
  // //   Goal is array with only even numbers
  return this.filter((num) => num % 2 === 0);
};
console.log(numbers.even(), "Expected: [2, 4]");

// ODD
Array.prototype.odd = function () {
  // //   Goal is array with only odd numbers.
  return this.filter((num) => num % 2 === 1);
};
console.log(numbers.odd(), "Expected: [1, 3, 5]");

// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Sample Tests", () => {
  it("test", () => {
    const numbers = [1, 2, 3, 4, 5];
    assert.deepEqual(numbers.square(), [1, 4, 9, 16, 25]);
    assert.deepEqual(numbers.cube(), [1, 8, 27, 64, 125]);
    assert.strictEqual(numbers.sum(), 15, "Wrong sum");
    assert.strictEqual(numbers.average(), 3, "Wrong average");
    assert.deepEqual(numbers.even(), [2, 4], "Wrong result for even()");
    assert.deepEqual(numbers.odd(), [1, 3, 5], "Wrong result for odd()");
  });
});
