// https://www.codewars.com/kata/5503013e34137eeeaa001648/train/javascript
// First Attempt - Dec 31, 2023


// =============
// Problem
// =============

// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

// Task
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk(*) characters.Trailing spaces should be removed, and every line must be terminated with a newline character(\n).

// Return null / nil / None /... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

//   Examples
// A size 3 diamond:

//  *
// ***
//  *
// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *
// ...that is:

// "  *\n ***\n*****\n ***\n  *\n"

// function diamond(n) {
//   return '';
// }


// ==============
// PREP
// ==============

// input will be an integer n, representing both the number of rows in the diamond shape, as well as the length of each row
// An input of an even integer, or a negative integer, should return null.

// output will be a single string, in the form of a diamond shape ASCII made of asterisks. 
// The top and bottom of the diamond will have only one asterisk, with the remaining characters as leading zeroes up to length n. 
// The middle row will be nothing but asterisks, of length n. 
// Each row should be separated by a newline - \n

// Questions
// Any other edge cases to consider? Will n ever be a number represented as a string? Will n ever not be a number? Will n ever be null, undefined, etc?
// Will n ever be a significantly large number to the point that optimization becomes really important?


// ==============
// Solution 1
// ==============

function diamond(n) {
  if (n % 2 === 0 || n < 1) return null

  console.log(`\nInput: ${n}`)
  // Save index of half-way mark, which is Math.floor(n/2) (example: Math.floor(5/2) is index 2)
  let halfwayIndex = Math.floor(n / 2)
  console.log(`Half-way Index (floored): ${halfwayIndex}`)

  // Make array of size halfwayIndex, place one asterisk into each element (e.g. if n === 5, halfwayIndex === 2, arr === ["*", "*"])
  let arr = Array(halfwayIndex).fill("*")
  console.log(`Starting arr before loop: ${arr}`)

  for (let i = 1; i < halfwayIndex; i++) {
    // for-loop: creating first half of array (not including middle row)
    arr[i] = arr[i].padStart(halfwayIndex, " ")
    // // pad start of each string with spaces, of length halfwayIndex - padStart(n, " ")
  }
  console.log(`Ending arr after loop: ${arr}`)


  // create and concat middle row of size n, and concat the reverse of the first array
  arr = arr.concat("*".repeat(n), arr.reverse())

  // Optimization: Start and end of array will always be a singl asterisk.
  // Optimization: middle index of array will always be * repeated n times. 
  // Optimization: second half of array does same thing as first but reversed
  console.log(`Final arr after concatenation: ${arr}`)

  // return array joined by "\n" character
  // even an array of length 1 needs to end in a \n
  let finalArr = arr.join("\n") + "\n"
  console.log(`Output:\n${finalArr}`)
  return finalArr
}

console.log(diamond(1), "*")
console.log(diamond(2), null)
console.log(diamond(3), "  *\n***\n  *")
console.log(diamond(5), "    *\n  ***\n*****\n  ***\n    *")
console.log(diamond(-1), null)

// need to revisit

// ==============
// Tests
// ==============

const { assert } = require('chai');

describe("diamond()", function () {

  it("Valid diamonds", () => {
    assert.strictEqual(diamond(1), "*\n")
    assert.strictEqual(diamond(3), " *\n***\n *\n")
    assert.strictEqual(diamond(5), "  *\n ***\n*****\n ***\n  *\n")
  });

  it("Invalid diamonds", () => {
    assert.strictEqual(diamond(2), null)
    assert.strictEqual(diamond(-3), null)
    assert.strictEqual(diamond(0), null)
  });
});
