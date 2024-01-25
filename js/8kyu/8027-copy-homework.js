// https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd/train/javascript
// First Attempt - Mar 30, 2023


// =============
// Problem
// =============

// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0
// Waiting for translations and Feedback! Thanks!

// function paperwork(n, m) {

// }


// ==============
// Solution 1
// ==============

function paperwork(n, m) {
    if(n <= 0 || m <= 0) {
        return 0
    } else {
        return n * m
    }
}

// #firsttryyy


// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Simple Tests", function(){
    it("Testing for fixed tests", () => {
        assert.strictEqual(paperwork(5,5), 25, 'Failed at paperwork(5, 5)');
        assert.strictEqual(paperwork(5,-5), 0, 'Failed at paperwork(5, -5)');
        assert.strictEqual(paperwork(-5,-5), 0, 'Failed at paperwork(-5, -5)');
        assert.strictEqual(paperwork(-5,5), 0, 'Failed at paperwork(-5, 5)');
        assert.strictEqual(paperwork(5,0), 0, 'Failed at paperwork(5, 0)');
    });
});
