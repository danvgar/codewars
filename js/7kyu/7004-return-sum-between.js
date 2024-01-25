// https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript
// First Attempt - Mar 22, 2023

// =============
// Problem
// =============

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how you get that number.

// function getSum(a, b)
// {
//    //Good luck!
// }


// ==============
// Solution 1
// ==============

function getSum(a, b) {
    let start
    let stop
    let step
    
    const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step)
    let newArr = b > a ? range(a,b,1) : range(b,a,1)

    // console.log(range(a,b,1))
    // console.log(range(b,a,1))
    // console.log(newArr)
    // console.log(`Range: ${newArr}, Start: ${start}, Stop: ${stop}`)
    
    let sum = newArr.reduce( (acc,c) => acc + c,0)
    // console.log(`Sum: ${sum}`)
    
    return sum 
}


// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {         
        assert.strictEqual(getSum(0,-1), -1);
        assert.strictEqual(getSum(0, 1),  1);
        assert.strictEqual(getSum(2, 2),  2);
    })
});