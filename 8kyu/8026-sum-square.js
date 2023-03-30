// https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript
// First Attempt - Mar 29, 2023

// =============
// Problem
// =============

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9

// function squareSum(numbers){

// }


// ==============
// Solution 1
// ==============

function squareSum(numbers){
    return numbers.map(a => a**2).reduce( (acc,c) => acc += c, 0)
}

// #firsttrryyy


// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
    it("test", () => {
        assert.strictEqual(squareSum([1,2]), 5);
        assert.strictEqual(squareSum([0, 3, 4, 5]), 50);
        assert.strictEqual(squareSum([]), 0);
    });
});
