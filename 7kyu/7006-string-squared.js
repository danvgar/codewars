// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
// First Attempt - Mar 28, 2023

// =============
// Problem
// =============

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 9^2 is 81 and 1^2 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 7^2 is 49, 6^2 is 36, and 5^2 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

// Happy Coding!

// function squareDigits(num){
//     return 0;
// }


// ==============
// Solution 1
// ==============

function squareDigits(num){
    num = String(num)
    num = num.split("")
    for(let i = 0; i < num.length; i++) {
        num[i] = num[i] * num[i]
    }
    num = num.join("")
    return Number(num)
}


// ==============
// Tests
// ==============

const { assert } = require("chai")

describe("Basic tests", () => {
    
    it("squareDigits(3212) should equal 9414", () => {
        assert.strictEqual(squareDigits(3212), 9414);
    });
    
    it("squareDigits(2112) should equal 4114", () => {
        assert.strictEqual(squareDigits(2112), 4114);
    });
    
    it("squareDigits(0) should equal 0", () => {
        assert.strictEqual(squareDigits(0), 0);
    });
})
