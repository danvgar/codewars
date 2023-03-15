// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript
// First Attempt - Mar 11, 2023

// =============
// Problem
// =============

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// function findAverage(array) {
//     return 0;
//   }


// ==============
// Solution 1
// ==============

function findAverage(array) {
    let avg = 0
    let total = 0
    
    array.forEach(x => total += x)
    
    if (array.length === 0) {
        return 0;
    } else {
        avg = total/array.length
    }
    
    return avg
}


// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(findAverage([1,1,1]), 1);
        assert.strictEqual(findAverage([1,2,3]), 2);
        assert.strictEqual(findAverage([1,2,3,4]), 2.5);
    });
});  
