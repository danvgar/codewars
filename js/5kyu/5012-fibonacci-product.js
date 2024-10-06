// https://www.codewars.com/kata/5541f58a944b85ce6d00006a/train/javascript
// First Attempt - Oct 6, 2024

// =============
// Problem
// =============

// The Fibonacci numbers are the numbers in the following integer sequence (Fn):

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

// such as

// F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

// Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

// F(n) * F(n+1) = prod.

// Your function productFib takes an integer (prod) and returns an array:

// [F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
// depending on the language if F(n) * F(n+1) = prod.

// If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prodyou will return

// [F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
// F(n) being the smallest one such as F(n) * F(n+1) > prod.

// Some Examples of Return:
// (depend on the language)

// productFib(714) # should return (21, 34, true),
//                 # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

// productFib(800) # should return (34, 55, false),
//                 # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
// -----
// productFib(714) # should return [21, 34, true],
// productFib(800) # should return [34, 55, false],
// -----
// productFib(714) # should return {21, 34, 1},
// productFib(800) # should return {34, 55, 0},
// -----
// productFib(714) # should return {21, 34, true},
// productFib(800) # should return {34, 55, false},
// Note:
// You can see examples for your language in "Sample Tests".

// function productFib(prod){
//   // ...
// }

// ==============
// Solution 1
// ==============

// Input: Integer - target product we are trying to achieve
// Output: Array <Int, Int, Bool> - the two products that are >= target, as well as a boolean on whether they actually multiply to the target
// Edge Cases: No edge-cases to be concerned with

//

function productFib(target) {
  // Fibonacci requires two numbers to create the third in the sequence.
  // Set up base fibonacci array, first three integers
  let fib = [0, 1];
  let i = 0;
  let prod = fib[i] * fib[i + 1];
  while (prod <= target) {
    prod = fib[i] * fib[i + 1];
    if (prod === target) {
      return [fib[i], fib[i + 1], true];
    }
    if (prod > target) {
      return [fib[i], fib[i + 1], false];
    }
    fib.push(fib[i] + fib[i + 1]);
    i++;
  }
  return -1
}

// Tests:
console.log(productFib(714), [21, 34, true]);
console.log(productFib(800), [34, 55, false]);
console.log(productFib(4895), [55, 89, true]);

// ==============
// Tests
// ==============

const { assert } = require("chai");

describe("Tests", () => {
  it("test", () => {
    assert.sameOrderedMembers(productFib(4895), [55, 89, true]);
    assert.sameOrderedMembers(productFib(5895), [89, 144, false]);
    assert.sameOrderedMembers(productFib(74049690), [6765, 10946, true]);
    assert.sameOrderedMembers(productFib(84049690), [10946, 17711, false]);
    assert.sameOrderedMembers(productFib(193864606), [10946, 17711, true]);
    assert.sameOrderedMembers(productFib(447577), [610, 987, false]);
    assert.sameOrderedMembers(productFib(602070), [610, 987, true]);
  });
});
