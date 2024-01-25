// https://www.codewars.com/kata/544675c6f971f7399a000e79/train/javascript
// First Attempt - Mar 27, 2023

// =============
// Problem
// =============

// Note: This kata is inspired by Convert a Number to a String!. Try that one too.

// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// Examples
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

// const stringToNumber = function(str){
//     // put your code here
//     return null;
// }


// ==============
// Solution 1
// ==============

const stringToNumber = function(str){
    return Number(str)
}


// ==============
// Tests
// ==============

const Test = require('@codewars/test-compat');

describe( "stringToNumber", function(){
    it( "should work for the examples" , function(){
        Test.assertEquals(stringToNumber("1234"),1234)
        Test.assertEquals(stringToNumber("605"), 605)
        Test.assertEquals(stringToNumber("1405"),1405)
        Test.assertEquals(stringToNumber("-7"),  -7)
    });
});