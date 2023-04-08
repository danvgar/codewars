// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript
// First Attempt - Apr 8, 2023


// =============
// Problem
// =============

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// function solution(str, ending){
//     // TODO: complete
// }


// ==============
// Solution 1
// ==============

function solution(str, ending){
    return str.includes(ending, str.length - ending.length)
}

// #firsttry!!

// ==============
// Tests
// ==============

const Test = require('@codewars/test-compat');

describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(solution('abcde', 'cde'), true)
        Test.assertEquals(solution('abcde', 'abc'), false)
    });
});
