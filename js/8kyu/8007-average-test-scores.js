// https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript
// First Attempt - Mar 7, 2023
// Refactoring 2 - Apr 18, 2023
// Refactoring 3 - Apr 18, 2023 

// =============
// Problem
// =============

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

// function betterThanAverage(classPoints, yourPoints) {
//     // Your code here
// }


// ==============
// Solution 1
// ==============

function betterThanAverage(classPoints, yourPoints) {
  let total = 0
  
  classPoints.push(yourPoints)
  
  classPoints.forEach((x,i) => total += x)
  
  let avgPoints = total / classPoints.length
  
  if (yourPoints > avgPoints) {
    return true
  } else {
    return false
  }
}

// #firsttrryyyyyyyyyy!!


// ==============
// Solution 2
// ==============

function betterThanAverage(classPoints, yourPoints) {
  classPoints.push(yourPoints)
  let total = classPoints.reduce((acc,c) => acc + c, 0)
  
  let avgPoints = total / classPoints.length
  
  return yourPoints > avgPoints
}


// ==============
// Solution 3
// ==============

function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce( (acc, c) => acc + c, 0) / classPoints.length
}


// ==============
// Tests
// ==============

const chai = require('chai');
const assert = chai.assert;

describe("Example Tests", function() {
  it("betterThanAverage([2, 3], 5) should return True", function() {
    assert.strictEqual(betterThanAverage([2, 3], 5), true);
  });
  
  it("betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75) should return True", function() {
    assert.strictEqual(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75), true);
  });
  
  it("betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9) should return False", function() {
    assert.strictEqual(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9), false);
  });
  
  it("betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50) should return False", function() {
    assert.strictEqual(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50), false);
  });
  
  it("betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21) should return False", function() {
    assert.strictEqual(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21), false);
  });
});