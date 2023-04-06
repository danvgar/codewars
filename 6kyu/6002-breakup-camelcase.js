// https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript
// First Attempt - Apr 2, 2023


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
// Solution 1
// ==============

function solution(string) {
    for(let i = 0; i < string.length; i++) {
        if(string.charAt(i) === string.charAt(i).toUpperCase()) {
            console.log(`Split: ${string.split("")}`)
            console.log(`Splice: ${string.split("").splice(i, 0, " ")}`)
            console.log(`Join: ${string.split("").splice(i, 0, " ").join("")}`)

            string = string.split("").splice(i, 0, " ").join("")
        }
    }
    return string
}

// need to revisit


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
