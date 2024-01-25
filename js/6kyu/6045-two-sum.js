// https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript
// First Attempt - Nov 23, 2023


// =============
// Problem
// =============

// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// Based on: http://oj.leetcode.com/problems/two-sum/

// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]

// function twoSum(numbers, target) {
//   return [0, 1];
// }


// ==============
// PREP
// ==============

// input will be an integer array and a target integer. no other edge cases need to be considered

// output will be will be an two element integer array, representing the indices of the two numbers in the the input array that add up to the target integer. 


// ==============
// Solution 1
// ==============

function twoSum(numbers, target) {
  // we are nesting two loops, checking if there is an element numbers[j] = target - numbers[i].
  // use ES6 map functionality to store elements and indices
  // Map is like a streamlined Object that lets us store numbers as property names and is ideal when frequently manipulating propertys and values. 
  // loop through array
  let map = new Map()
  for (let i = 0; i < numbers.length; i++) {
    if (!map.has(target - numbers[i])) {
      // if map doesn't have a number that equals target - numbers[i], add numbers[i] and it's index
      map.set(numbers[i], i)
    } else {
      // if map does have a number that equals target - numbers[i], return an array of that number's index in map as well as the current index. 
      return [map.get(target - numbers[i]), i]
    }
    // the indices in map are always "first" in comparison to i which is iterating through the array
  }
  // if numbers is empty, or no result is found, return empty array
  return []
}


// ==============
// Tests
// ==============

describe("Fixed Tests", function () {

  const chai = require("chai"), { assert } = chai;

  function doTest(numbers, targetSum) {
    const [idx0, idx1] = twoSum(numbers.slice(), targetSum);
    const num0 = numbers[idx0], num1 = numbers[idx1], actSum = num0 + num1;

    const message = `for target sum = ${targetSum} and numbers = [${numbers.join(', ')}]\n`;

    assert.notEqual(idx0, idx1,
      message + `the two indices must be different, but got [${[idx0, idx1]}]\n`
    );
    assert.strictEqual(actSum, targetSum,
      message + `array[${idx0}] = ${num0}, array[${idx1}] = ${num1}\n` +
      `${num0} + ${num1} = ${actSum}\n`
    );
  }

  it('Sample Tests', function () {
    doTest([1, 2, 3], 4);
    doTest([1234, 5678, 9012], 14690);
    doTest([2, 2, 3], 4);
    doTest([2, 3, 1], 3);
  })
});