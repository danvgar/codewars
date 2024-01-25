// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript
// First Attempt - Apr 7, 2023


// =============
// Problem
// =============

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// function removeChar(str){
//     //You got this!   
// }   


// ==============
// Solution 1
// ==============

function removeChar(str){
    // console.log(`Original Input: ${str}`)

    str = str.split("")
    // console.log(`Split: ${str}`)

    pop = str.pop()
    // console.log(`Pop: ${str}`)

    shift = str.shift()
    // console.log(`Shift: ${str}`)

    str = str.join("")
    // console.log(`Join: ${str}`)

    return str
}


// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
    it("Fixed Tests", () => {
        assert.strictEqual(removeChar('eloquent'), 'loquen');
        assert.strictEqual(removeChar('country'), 'ountr');
        assert.strictEqual(removeChar('person'), 'erso');
        assert.strictEqual(removeChar('place'), 'lac');
        assert.strictEqual(removeChar('ooopsss'), 'oopss');
    });
});
