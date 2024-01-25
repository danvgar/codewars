// https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript
// First Attempt - May 17, 2023


// =============
// Problem
// =============

// Code as fast as you can! You need to double the integer and return it.

// function doubleInteger(i) {
//     // i will be an integer. Double it and return it.
//     return i;
// }


// ==============
// Solution 1
// ==============

function doubleInteger(i) {
    return i*2
}


// ==============
// Tests
// ==============

const Test = require('@codewars/test-compat');

describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(doubleInteger(2), 4);
    });
});

