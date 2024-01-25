// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript
// First Attempt - July 27, 2023


// =============
// Problem
// =============

// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

// function openOrSenior(data){
//   // ...
// }

// P: input will be an array of arrays, with each nested array having two integers. The first integer is the person's age, and the second is the person's handicap. 
// R: output will be an array of strings stating whether the member is Senior or Open category. Senior members are at least 55 years old and have a handicap greater than 7. 
// E:
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
// P: 
// let memberCategory = []
// loop to look at each pair of values.
// if index 0 >= 55 && index1 > 7, push "Senior, else push Open to memberCategory
// return memberCategory array


// ==============
// Solution 1
// ==============

function openOrSenior(data){
  // let memberCategory = []
  let memberCategory = []
  // look at each pair of values.
  for (let i = 0; i < data.length; i++) {
    // if index 0 >= 55 && index1 > 7, push "Senior, else push Open to memberCategory
    if(data[i][0] >= 55 && data[i][1] > 7) {
      memberCategory.push("Senior")
    } 
    else {
      memberCategory.push("Open")
    }
  }
  // return memberCategory array
  return memberCategory
}

// #firsttryyyyy


// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Fixed tests", () => {
    assert.deepEqual(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]),['Open', 'Senior', 'Open', 'Senior'])
    assert.deepEqual(openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]]),['Open', 'Open', 'Open', 'Open'])
    assert.deepEqual(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]),['Senior', 'Open', 'Open', 'Open'])
  });
});
