// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097
// First Attempt - Apr 22, 2023


// =============
// Problem
// =============

// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// Note: this kata uses strict construction as shown in the description and the examples, you can read more about it here

// function century(year) {
//     // Finish this :)
//     return;
// }


// ==============
// Solution 1
// ==============

function century(year) {
    return Math.ceil(year/100)
}


// ==============
// Tests
// ==============

const Test = require('@codewars/test-compat');

describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(century(1705), 18, 'Testing for year 1705');
        Test.assertEquals(century(1900), 19, 'Testing for year 1900');
        Test.assertEquals(century(1601), 17, 'Testing for year 1601');
        Test.assertEquals(century(2000), 20, 'Testing for year 2000');
        Test.assertEquals(century(89), 1, 'Testing for year 89');
    });
});
