// https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript
// First Attempt - Apr 2, 2023
// Second Attempt - Nov 11, 2023

// =============
// Problem
// =============

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// // complete the function
// function solution(string) {

// }


// ==============
// PREP
// ==============

// input will be a string in camelCase
// output will be the same string, with every capital letter preceded by a space. if no capital letters or empty string, return the same string


// ==============
// Solution 1
// ==============

function solution(string) {
    let arr = [string[0]]
    for (let i = 1; i < string.length; i++) {
        // i = 1 because if first character is uppercase, we don't necessarily want a space before it
        string[i] === string[i].toUpperCase() ? arr.push(" " + string[i]) : arr.push(string[i])
    }
    return arr.join("")
}


// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;

describe("Sample Tests", () => {
    it("Should pass sample tests", () => {
        assert.strictEqual(solution('camelCasing'), 'camel Casing', 'Unexpected result')
        assert.strictEqual(solution('camelCasingTest'), 'camel Casing Test', 'Unexpected result')
    });
});
