// https://www.codewars.com/kata/551b4501ac0447318f0009cd/train/javascript
// First Attempt - Apr 15, 2023


// =============
// Problem
// =============

// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.

// function booleanToString(b){
//     //your code here
// }


// ==============
// Solution 1
// ==============

function booleanToString(b){
    return b.toString()
}

// #firsttry


// ==============
// Tests
// ==============

const Test = require('@codewars/test-compat');

describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(booleanToString(true), "true", 'When we pass in true, we want the string "true" as output');
        Test.assertEquals(booleanToString(false), "false", 'When we pass in false, we want the string "false" as output');
    });
});
