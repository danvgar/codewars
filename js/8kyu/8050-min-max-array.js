// https://www.codewars.com/kata/559590633066759614000063/train/javascript
// First Attempt - May 11, 2023


// =============
// Problem
// =============

// Story
// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples (Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]
// Remarks
// All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.

// function minMax(arr){
//     return [0,0]; // fix me!
// }

// P: input is a list of positive numbers. the input will never be null or undefined.
// R: output will be an array of two numbers, the 0th index being the min of the input array, and the 1st index being the max of the input array 
// E: [1,2,3,4,5] --> [1,5]
// P: return [Math.min(arr), Math.max(arr)]. Use spread operator to create input of numbers rather than input of array


// ==============
// Solution 1
// ==============

function minMax(arr){
    return [Math.min(...arr), Math.max(...arr)]
}


// ==============
// Tests
// ==============

const assert = require('chai').assert;

describe("minMax", () => {
    const testCases = [
        [[1, 2, 3, 4, 5], [1, 5]],
        [[2334454, 5], [5, 2334454]],
        [[5], [5, 5]]
    ];
    for(const [input, expected] of testCases) {
        it(`should work for ${JSON.stringify(input)}`, () => {
            assert.deepEqual(minMax(input), expected);
        });
    }
});