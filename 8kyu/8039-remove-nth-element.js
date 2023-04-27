// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript
// First Attempt - Apr 26, 2023


// =============
// Problem
// =============

// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

// function removeEveryOther(arr){
//     //your code here
// }


// ==============
// Solution 1
// ==============

function removeEveryOther(arr){
    for(let i = 1; i < arr.length; i = i + 2) {
        arr.splice(i, 1)
        i--
    }
    return arr
}


// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests",() =>{
    it("Testing for fixed tests", () => {
        assert.deepEqual(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']),['Hello', 'Hello Again']);
        assert.deepEqual(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),[1, 3, 5, 7, 9]);
        assert.deepEqual(removeEveryOther([[1, 2]]), [[1, 2]]);
        assert.deepEqual(removeEveryOther([['Goodbye'], {'Great': 'Job'}]),[['Goodbye']]);
    })
});
