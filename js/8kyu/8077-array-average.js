// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript
// First Attempt - June 22, 2023


// =============
// Problem
// =============

// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

// function getAverage(marks){
//   //TODO : calculate the downward rounded average of the marks array
// }


// ==============
// Solution 1
// ==============

function getAverage(marks){
  return Math.floor(marks.reduce((acc,c) => acc + c, 0) / marks.length)
}


// ==============
// Tests
// ==============

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(getAverage([2,2,2,2]),2);
    Test.assertEquals(getAverage([1,2,3,4,5,]),3);
    Test.assertEquals(getAverage([1,1,1,1,1,1,1,2]),1);
    
    
  });
});
