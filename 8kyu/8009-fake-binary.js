// https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript
// First Attempt - Mar 8, 2023
// Refactoring - Mar 14, 2023

// =============
// Problem
// =============

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

// function fakeBin(x){
// }

// ==============
// Solution 1
// ==============

function fakeBin(x){
    let array = x.split("")
    
    for(let i = 0; i < array.length; i++) {
        
        if (parseInt(array[i]) < 5) {
            array[i] = '0'
        } else {
            array[i] = '1'
        } 
    }
    
    let newString = array.join('')
    return newString
} 

// ==============
// Solution 2
// ==============

function fakeBin(x) {
    let newArray = x.split("")        
    newArray = newArray.map(a => parseInt(a,10))
    newArray = newArray.map(a => (a < 5) ? a = 0 : a = 1)
    let newBin = newArray.join("")
    return `${newBin}`
} 

// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests",() =>{
    it("Testing for fixed tests", () => {
        assert.strictEqual(fakeBin('45385593107843568'), '01011110001100111');
        assert.strictEqual(fakeBin('509321967506747'), '101000111101101'); 
        assert.strictEqual(fakeBin('366058562030849490134388085'), '011011110000101010000011011');
    })
});