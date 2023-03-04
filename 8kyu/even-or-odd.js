// Attempt 1 - Mar 2, 2023

// =============
// Problem
// =============

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.


// ==============
// Solution 1
// ==============

function evenOrOdd(number) {
    return number % 2 === 0 ? "Even" : "Odd"
}

// ==============
// Solution 2
// ==============

function evenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even"
    } else {
        return "Odd"
    }
}

// ==============
// Tests
// ==============

const chai = require('chai');
const assert = chai.assert;

describe("Sample tests",() => {
    
    it("2 is even", () => {
        assert.strictEqual(evenOrOdd(2), "Even");
    });
    it("7 is odd", () => {
        assert.strictEqual(evenOrOdd(7), "Odd");
    });
    it("-42 is even", () => {
        assert.strictEqual(evenOrOdd(-42), "Even");
    });
    it("-7 is odd", () => {
        assert.strictEqual(evenOrOdd(-7), "Odd");
    });
    it("0 is even", () => {
        assert.strictEqual(evenOrOdd(0), "Even");
    });
});
