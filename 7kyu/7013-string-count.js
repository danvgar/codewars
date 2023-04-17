// https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript
// First Attempt - Apr 16, 2023


// =============
// Problem
// =============

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// function XO(str) {
//     //code here
// }


// ==============
// Solution 1
// ==============

function XO(str) {
    let newStr = str.toLowerCase().split("")
    return newStr.filter(a => a === "x").length === newStr.filter(a => a === "o").length
}


// ==============
// Tests
// ==============

const Test = require('@codewars/test-compat');

describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(XO('xo'),true);
        Test.assertEquals(XO("xxOo"),true);
        Test.assertEquals(XO("xxxm"),false);
        Test.assertEquals(XO("Oo"),false);
        Test.assertEquals(XO("ooom"),false);
    });
});
