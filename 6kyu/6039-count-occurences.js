// https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript
// First Attempt - Nov 16, 2023


// =============
// Problem
// =============

// Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats.He isn't fond of seeing the Eiffel tower 40 times.
// He tells them that he will only sit for the session if they show the same motif at most N times.Luckily, Alice and Bob are able to encode the motif as a number.Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order ?

// Task
// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1, 2, 3, 1, 2, 1, 2, 3], you take[1, 2, 3, 1, 2], drop the next[1, 2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to[1, 2, 3, 1, 2, 3].
// With list[20, 37, 20, 21] and number 1, the result would be[20, 37, 21].

// function deleteNth(arr, n) {
//   // ...
// }


// ==============
// PREP
// ==============

// input will be an integer array and an integer, with the integer representing the maximum number of times an element is allowed to appear in the list. no other edge cases to worry about such as numbers as strings, empty arrays, etc?

// output will be the same array in the original order, but with every occurence greater than the input integer removed. 


// ==============
// Solution 1
// ==============

function deleteNth(arr, n) {
  // use filter, use slice to check portions of the array at a time (slice(0,i)) and compare number of occurences (.filter.length) with n
  return arr.filter(
    // if below satement returns false, we don't include current num
    (num, i) => arr 
      // check original array one section at a time (slice(0,i))
      .slice(0, i)
      // check if occurences in this section is less than n. (.filter().length < n)
      // if occurences of num in section are not less than n, they are equal to n, and we don't want the current element. so we return false and it is excluded
      .filter(num2 => num2 === num).length < n
  )
}

console.log(deleteNth([20, 37, 20, 21], 1), `Expected: [20, 37, 21]`)
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3), `Expected: [1, 1, 3, 3, 7, 2, 2, 2]`)
console.log(deleteNth([1, 2, 3, 1, 2, 1, 2, 3], 1), `Expected: [1, 2, 3, 1, 2, 3]`)


// ==============
// Tests
// ==============

const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    assert.sameOrderedMembers(deleteNth([20, 37, 20, 21], 1), [20, 37, 21])
    assert.sameOrderedMembers(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3), [1, 1, 3, 3, 7, 2, 2, 2])
  });
});
