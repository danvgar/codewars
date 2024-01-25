// https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/javascript
// First Attempt - Dec 5, 2023


// =============
// Problem
// =============

// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.

// output
// The function should return an integer, the total time required.

// Important
// Please look at the examples and clarifications below, to ensure you understand the task correctly :)

// Examples
// queueTime([5,3,4], 1)
// // should return 12
// // because when there is 1 till, the total time is just the sum of the times

// queueTime([10,2,3,3], 2)
// // should return 10
// // because here n=2 and the 2nd, 3rd, and 4th people in the 
// // queue finish before the 1st person has finished.

// queueTime([2,3,10], 2)
// // should return 12

// Clarifications
// There is only ONE queue serving many tills, and
// The order of the queue NEVER changes, and
// The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
// N.B. You should assume that all the test input will be valid, as specified above.

// P.S. The situation in this kata can be likened to the more-computer-science-related idea of a thread pool, with relation to running multiple processes at the same time: https://en.wikipedia.org/wiki/Thread_pool

// function queueTime(customers, n) {
//   //TODO
// }


// ==============
// PREP
// ==============

// input will be two arguments, an integer array and an integer. The integer array represents the queue of customers, with index 0 representing the start of the queue. Each element's value represents the amount of time a customer needs to complete their checkout. The second arugment is an integer representing the number of checkout lines. 

// any other edge cases to worry about? will inputs ever be a value other than specified?

// output will be an integer representing the maximum time required for the queue to finish. 
// if queue is empty, the output should be zero. 

// the customers wait until a queue has finished before entering it. 


// ==============
// Solution 1
// ==============

function queueTime(customers, n) {
  let tills = Array.from(Array(n).fill(0))
  
  for (let i = 0; i < customers.length; i++) {
    let minIndex = tills.findIndex(num => num === Math.min(...tills))
    tills[minIndex] += customers[i]
  }

  return Math.max(...tills)
}

// #firsttryyyyy

console.log(queueTime([], 1), `Expected: 0`)
console.log(queueTime([1, 2, 3, 4], 1), `Expected: 10`);
console.log(queueTime([2, 2, 3, 3, 4, 4], 2), `Expected: 9`);
console.log(queueTime([10, 2, 3, 3], 2), `Expected: 10`);


// ==============
// Tests
// ==============

const { assert } = require('chai');

describe("Sample tests", function () {

  it("Simple tests", () => {
    assert.strictEqual(queueTime([], 1), 0);
    assert.strictEqual(queueTime([1, 2, 3, 4], 1), 10);
    assert.strictEqual(queueTime([2, 2, 3, 3, 4, 4], 2), 9);
    assert.strictEqual(queueTime([1, 2, 3, 4, 5], 100), 5);
  });

  it("Examples", () => {
    assert.strictEqual(queueTime([5, 3, 4], 1), 12);
    assert.strictEqual(queueTime([10, 2, 3, 3], 2), 10);
    assert.strictEqual(queueTime([2, 3, 10, 2], 2), 12);
  });

  //add some more example tests here, if you like
});