// https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript
// First Attempt - May 13, 2023


// =============
// Problem
// =============

// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// If you liked this kata, check out part 2!!

// function expandedForm(num) {
//     // Your code here
// }

// P: input will be a positive non-zero whole number 
// R: output will be a string with expanded numbers, concatenated with a + between numbers
// E: input: 70304, output: "70000 + 300 + 4"
// P: convert to string, get length of string, loop through number. if index === zero, skip. Else add zeroes with length minus index + 1. 


// ==============
// Solution 1
// ==============

function expandedForm(num) {
    let numString = [...String(num)]
    let numLength = numString.length 
    let numExpanded = ""
    let i = 0
    console.log(num)
    
    while(i < numLength) {
        if(numString[i] === "0") {
            i++
        } else if(i === numLength - 1) {
            numExpanded += numString[i] + "0".repeat(numLength - i - 1)
            i++
        } else {
            numExpanded += numString[i] + "0".repeat(numLength - i - 1) + " + "
            i++
        }
    }
    
    console.log(numExpanded)
    return numExpanded
}

// need to revisit


// ==============
// Tests
// ==============

const { assert } = require('chai');

describe("Tests", () => {
    it("test", () => {
        assert.strictEqual(expandedForm(12), '10 + 2');
        assert.strictEqual(expandedForm(42), '40 + 2');
        assert.strictEqual(expandedForm(70304), '70000 + 300 + 4');
    });
});


