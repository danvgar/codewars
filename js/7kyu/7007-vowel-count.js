// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
// First Attempt - Mar 31, 2023


// =============
// Problem
// =============

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// function getCount(str) {
//     return 0;
// }

// ==============
// Solution 1
// ==============

function getCount(str) {
    const count = str.split("").filter(a => a === "a" || a === "e" || a === "i" || a === "o" || a === "u").join("").length
    return count
}


// ==============
// Tests
// ==============

const {assert} = require("chai");

describe("Vowels Count Tests",function(){
    it("should return 5 for 'abracadabra'",function(){
        assert.strictEqual(getCount("abracadabra"), 5) ;
    });
});