// https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript
// First Attempt - Mar 12, 2023
// Second Attempt - Mar 14, 2023
// Second Solution - May 6, 2023

// =============
// Problem
// =============

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// function countPositivesSumNegatives(input) {
//     // your code here
// }


// ==============
// Solution 1
// ==============

function countPositivesSumNegatives(input) {
    let count
    let sum
    let output = []
    if (!Array.isArray(input) || input.length === 0) {
        return output
    } else {
        count = 0
        sum = 0
        
        let posArray = input.filter(value => value > 0)
        count = posArray.length
        
        let negArray = input.filter(value => value < 0)
        sum = negArray.reduce( (acc,a) => acc + a, 0)
        
        output = [count, sum]
        return output
    }
}


// ==============
// Solution 2
// ==============

function countPositivesSumNegatives(input) {
        return input && input.length ? : [input.filter(a => a > 0).length, input.filter(a => a < 0).reduce( (acc,c) => acc + c, 0)] : []
}


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