// https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript
// First Attempt - Apr 20, 2023


// =============
// Problem
// =============

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

// function isIsogram(str){
//     //...
// }


// ==============
// Solution 1
// ==============

function isIsogram(str){
    let stringArray = str.toLowerCase().split("")
    return stringArray.some((item,index) => stringArray.indexOf(item) !== index) ? false : true
}


// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
    it("test", () => {
        assert.strictEqual( isIsogram("Dermatoglyphics"), true );
        assert.strictEqual( isIsogram("isogram"), true );
        assert.strictEqual( isIsogram("aba"), false, "same chars may not be adjacent" );
        assert.strictEqual( isIsogram("moOse"), false, "same chars may not be same case" );
        assert.strictEqual( isIsogram("isIsogram"), false );
        assert.strictEqual( isIsogram(""), true, "an empty string is a valid isogram" );
    });
});
