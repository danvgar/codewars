// https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript
// First Attempt - May 7, 2023


// =============
// Problem
// =============

// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

// var summation = function (num) {
//     // Code here
// }

// P: always a single positive integer
// R: the sum of every number from 1 to provided integer. (inclusive)
// E: 4 => (1 + 2 + 3 + 4)
// P: loop through 1 to num and add to total


// ==============
// Solution 1
// ==============

var summation = function (num) {
    let total = 0
    for(let i = 1; i <= num ; i++) {
        total += i
    }
    return total
}


// ==============
// Tests
// ==============

const assert = require('chai').assert;

describe('summation', function () {
    it('should return the correct total', function () {
        assert.strictEqual(summation(1),  1);
        assert.strictEqual(summation(2),  3);
        assert.strictEqual(summation(8), 36);
    })
})
