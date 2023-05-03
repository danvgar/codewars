// https://www.codewars.com/kata/568dcc3c7f12767a62000038/train/javascript
// First Attempt - May 2, 2023


// =============
// Problem
// =============

// Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

// setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true

// function setAlarm(employed, vacation){

// }


// ==============
// Solution 1
// ==============

function setAlarm(employed, vacation){
    return employed && !vacation
}

// #firsttry


// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Test Suite",()=>{
    it("Fixed tests",()=>{
        assert.strictEqual(setAlarm(true, true),  false,"Should be false.");
        assert.strictEqual(setAlarm(false,true),  false, "Should be false.");
        assert.strictEqual(setAlarm(true, false), true,"Should be true.");
    });
});
