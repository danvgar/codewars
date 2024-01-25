// https://www.codewars.com/kata/5592e3bd57b64d00f3000047/train/javascript
// First Attempt - Nov 18, 2023


// =============
// Problem
// =============

// Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n - 1)^3, and so on until the top which will have a volume of 1 ^ 3.

// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build ?

// The parameter of the function findNb(find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as n^3 + (n - 1)^3 + (n - 2)^3 + . . .  + 1 ^ 3 = m if such a n exists or - 1 if there is no such n.

// Examples:
// findNb(1071225)-- > 45
// findNb(91716553919377)-- > -1

// function findNb(m) {
//   // your code
//   return (-1);
// }


// ==============
// PREP
// ==============

// input will be an integer representing the final volume of the building, m
// output will be a number of cubes n that can satisfy the above equation to achieve m. return that number n, else if no such number, return -1

// the volume of the cubes can vary
// at it's core, the question is asking if I can find a value n that satisfies the equation
// does the equation work such that, if testing n = 3, then (3 - 0)^3 + (3 - 1)^3 + (3 - 2)^3 = m? So the equation has to satisfy (n - i)^3 from i = 0 to i = n - 1?
// if so, a brute force method is a nested-loop, incrementing both i for each increment of n. but that would be insane for large numbers. how can we minimize number of attempts at n?
// some level of binary search? test an initial value of n, and if that loop result is bigger or smaller than m, we increase/decrease n by an order of magnitude?


// ==============
// Solution 1
// ==============

function findNb(m) {
  let sum = 0
  for (let n = 2; n < Math.cbrt(m); n++) { // when do we stop testing n? for now, assuming cube root of m. 
    for (let i = 0; i < n - 1; i++) { // starting with n = 2 means that i will only run once since 0 < 2 - 1 is the stop condition.
      sum += (n - i) ** 3 // inner loops job is to construct and run the algorithm for each i. 
    }
    if (sum === m) {
      return n
    }
  } // outer loops job is to test n. 
  // return n (number of cubes)
  // if test fails, return -1
  return -1
}

console.log(findNB(27), `Expected: 3`) // (3 - 0)^3 + (3 - 1)^3 + (3 - 2)^3 = 27


// ==============
// Solution 2 (Cheating to understand)
// ==============

function findNb(m) {
  let n = 0; // first n to test
  let sum = 0;
  while (sum < m) { // why is our limit when sum < m? essentially we start from zero and we are just going to keep trying until it's mathematically impossible?
    // our goal is sum === m. if we get there, we break out of the while loop. if we exceed it, we break out of the while loop. so our goal is to try and get as close as possible to m. this method is brute force but technically gets the job done.
    n++; // test next n
    sum += Math.pow(n, 3); // this is where you fell off. 
    // n = 0; sum = 0 + 0^3
    // n = 1; sum = 0^3 + 1^3
    // n = 2; sum = 0^3 + 1^3 + 2^3 or 0 + 1^3 + n^3
    // n = 3; sum = 0^3 + 1^3 + 2^3 + 3^3 or 0 + 1^3 + (n - 1)^3 + n^3
  }
  if (sum === m) {
    return n
  } else {
    return -1
  }
}


// ==============
// Pseudocode 2 (Cheating to understand)
// ==============

function findNb(m) {
  //   brute force is to loop through every n starting from 0 until "sum" (left side of equation) is less than m
  //   instantiate n, sum at 0. 
  let sum = 0
  let n = 0

  while (sum < m) {
  //   while loop since we don't know when we will stop. we want loop to stop when sum >= m, so loop condition is sum < m
  //   during the loop, increment n and add n^3 to the sum. treat equation as backwards. 0^3 + 1^3 + 2^3 + 3^3 where last addition is n^3.
    n++
    sum += n ** 3
  }
  //   our goal is sum === m. if after the loop we achieve that, return what n we stopped at. 
  //   if sum ended up exceeding m, that means the number didn't exist so we return -1
  return sum === m ? n : -1
}
  

// ==============
// Tests
// ==============

const { assert } = require('chai');

it("Basic tests", function () {
  assert.strictEqual(findNb(4183059834009), 2022)
  assert.strictEqual(findNb(24723578342962), -1)
  assert.strictEqual(findNb(135440716410000), 4824)
  assert.strictEqual(findNb(40539911473216), 3568)
})


