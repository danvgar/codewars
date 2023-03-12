// https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript
// First Attempt - Mar 12, 2023

// =============
// Problem
// =============

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


// ==============
// Solution 1
// ==============

// function countPositivesSumNegatives(input) {
//     // your code here
// }

function countPositivesSumNegatives(input) {
    let count = 0
    let sum = 0
    
    let noZeroes = input.filter(value => value >= 0)
    noZeroes.forEach(x => x > 0 ? count += 1 : sum += x)
    
    let output = [count, sum]
}

// need to revisit

// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Example tests", () => {
    it("Testing for fixed test 1", () => {
        let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
        let actual = countPositivesSumNegatives(testData);
        let expected = [10, -65];
        assert.deepEqual(actual, expected);
    })
    
    it("Testing for fixed test 2", () => {
        let testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
        let actual = countPositivesSumNegatives(testData);
        let expected = [8, -50];    
        assert.deepEqual(actual, expected);
    });
});