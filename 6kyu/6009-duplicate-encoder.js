// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript
// First Attempt - June 3, 2023


// =============
// Problem
// =============

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

// function duplicateEncode(word){
//     // ...
// }

// P: input is a string, do not need to test for edge cases
// R: output is the same string, but every character that appears once gets replaced with a ( and every character with more than one occurance is replaced with a ). This is case insensitive, so a uppercase and lowercase letter should be treated as the same letter. should consider inputs of ( or ), spaces, etc as part of the code
// E: "Success" -> ")())())"; "(()" -> "))("
// P: word.lowercase. iterate through [...word]. if charAt current i === lastIndexOf(charAt(i)), replaceAll 
// filter array for each element


// ==============
// Solution 1
// ==============

function duplicateEncode(word){
    // ...
}

// revisit


// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Duplicate Encoder", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(duplicateEncode("din"),"(((");
    assert.strictEqual(duplicateEncode("recede"),"()()()");
    assert.strictEqual(duplicateEncode("Success"),")())())","should ignore case");
    assert.strictEqual(duplicateEncode("(( @"),"))((");
  });
});
