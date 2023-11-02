// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript
// First Attempt - May 4, 2023
// Second Attempt - Nov 1, 2023


// =============
// Problem
// =============

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// var uniqueInOrder = function(iterable){
//     //your code here - remember iterable can be a string or an array
// }


// ==============
// Solution 1
// ==============

var uniqueInOrder = function (iterable) {
    if (!iterable.length) {
        return []
    }
    let arr = [iterable[0]]
    let lastIndex = arr.length - 1

    for (let i = 1; i < iterable.length; i++) {
        if (arr[lastIndex] === iterable[i]) {
            continue
        } else {
            arr.push(iterable[i])
            lastIndex = arr.length - 1
        }
    }

    return arr
}


// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests", () => {
    it("test", () => {
        assert.deepEqual(uniqueInOrder('AAAABBBCCDAABBB'), ['A', 'B', 'C', 'D', 'A', 'B'])
    });
});

