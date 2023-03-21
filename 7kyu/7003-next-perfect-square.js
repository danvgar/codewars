// https://www.codewars.com/kata/56269eb78ad2e4ced1000013/javascript
// First Attempt - Mar 20, 2023

// =============
// Problem
// =============

// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

// function findNextSquare(sq) {
//     // Return the next square if sq is a perfect square, -1 otherwise
//     return -1;
// }


// ==============
// Solution 1
// ==============

function findNextSquare(sq) {
    if (Number.isInteger(Math.sqrt(sq))) {
        return (Math.sqrt(sq) + 1)**2
    } else {
        return -1; 
    }
}

// #FIRSTTRYYYYY


// ==============
// Tests
// ==============

const Test = require('@codewars/test-compat');

describe("findNextSquare", function() {
    it("should return the next square for perfect squares", function() {
        Test.assertEquals(findNextSquare(121), 144, "Wrong output for 121");
        Test.assertEquals(findNextSquare(625), 676, "Wrong output for 625");
        Test.assertEquals(findNextSquare(319225), 320356, "Wrong output for 319225");
        Test.assertEquals(findNextSquare(15241383936), 15241630849, "Wrong output for 15241383936");
    });
    
    it("should return -1 for numbers which aren't perfect squares", function() {
        Test.assertEquals(findNextSquare(155), -1, "Wrong output for 155");
        Test.assertEquals(findNextSquare(342786627), -1, "Wrong output for 342786627");
    });
});
