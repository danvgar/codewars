// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
// First Attempt - Mar 19, 2023
// Refactoring - May 6, 2023

// =============
// Problem
// =============

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// function positiveSum(arr) {  
// }


// ==============
// Solution 1
// ==============

function positiveSum(arr) {  
    return arr.filter(a => a > 0).reduce((acc, c) => acc + c, 0)
}


// ==============
// Tests
// ==============

const { assert } = require("chai")

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(positiveSum([1,2,3,4,5]),15);
        assert.strictEqual(positiveSum([1,-2,3,4,5]),13);
        assert.strictEqual(positiveSum([]),0);
        assert.strictEqual(positiveSum([-1,-2,-3,-4,-5]),0);
        assert.strictEqual(positiveSum([-1,2,3,4,-5]),9);
    });
});