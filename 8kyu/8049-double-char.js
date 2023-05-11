// https://www.codewars.com/kata/56b1f01c247c01db92000076/train/javascript
// First Attempt - May 10, 2023


// =============
// Problem
// =============

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

// function doubleChar(str) {
//     // Your code here
// }

// P: input is a string data type
// R: output is a string data type, with each character in the input string doubled 
// E: 
//     * "String"      -> "SSttrriinngg"
//     * "Hello World" -> "HHeelllloo  WWoorrlldd"
//     * "1234!_ "     -> "11223344!!__  "
// P: separate string into array, use repeat, join array again


// ==============
// Solution 1
// ==============

function doubleChar(str) {
    return [...str].map(a => a.repeat(2)).join("")
}


// ==============
// Tests
// ==============

const Test = require('@codewars/test-compat');

describe("doubleChar", function() {
    it("works for some examples", function() {
        Test.assertEquals(doubleChar("abcd"), "aabbccdd");
        Test.assertEquals(doubleChar("Adidas"), "AAddiiddaass");
        Test.assertEquals(doubleChar("1337"), "11333377");
        Test.assertEquals(doubleChar("illuminati"), "iilllluummiinnaattii");
        Test.assertEquals(doubleChar("123456"), "112233445566");
        Test.assertEquals(doubleChar("%^&*("), "%%^^&&**((");
    });
});
