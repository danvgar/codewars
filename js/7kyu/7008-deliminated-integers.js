// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript
// First Attempt - Apr 1, 2023


// =============
// Problem
// =============

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

// function highAndLow(numbers){
//     // ...
// }


// ==============
// Solution 1
// ==============

function highAndLow(numbers){
    let numStrArray = numbers.split(" ").map(numStr => parseInt(numStr)) // splits input string and converts all space deliminated strings into numbers
    let max = Math.max.apply(null,numStrArray) // max of integer array
    let min = Math.min.apply(null, numStrArray) // min of integer array
    return `${max} ${min}`
}


// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Example tests", () => {
    it("Test 1", () => {
        assert.strictEqual(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");
    });
    it("Test 2", () => {
        assert.strictEqual(highAndLow("1 2 3"), "3 1");
    });
});
