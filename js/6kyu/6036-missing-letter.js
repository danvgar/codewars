// https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript
// First Attempt - Nov 13, 2023


// =============
// Problem
// =============

// Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'
// (Use the English alphabet with 26 letters!)

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!

// function findMissingLetter(array)
// {
//   return ' ';
// }


// ==============
// PREP
// ==============

// input will be an array of letters, one letter per element. the letters will always be a consecutive sequence from the english alphabet, except for one missing letter. all elements will be in the same case

// will the missing letter ever be at the beginning or end of the array? 
// will the letters always be in the correct order, or is sorting needed first?
// should we consider if any elements are empty strings, empty arrays, null, undefined, etc? (no)

// output will be a single character string representing the missing letter in the array, in the same case as the rest of the array. 


// ==============
// Solution 1
// ==============

function findMissingLetter(array) {
  // UTF-16 code considers both capital and lower case letters. 
  // String.fromCharCode(arguments) -> arguments should be multiple arguments, not just an array
  // str.codePointAt(index) -> returns the code unit of each point. 

  // loop through array and find index where difference between i+1 and i is 2, based on UTF-16 code units
  // find() method

  console.log(`\nInput: ${array}`)

  // convert characters of array into UTF-16 code
  array = array.map(char => char.codePointAt(0))
  console.log(`Mapped Array: ${array}`)

  // find will return the element itself, not an array
  array = array.find((num, i) => array[i + 1] - num === 2)
  console.log(`Found Letter: ${array}`)
  console.log(`typeof array: ${typeof array}`)

  // final letter will be result of find() + 1, converted back into a character
  let letter = String.fromCharCode(array + 1)
  return letter

}


// ==============
// Refactoring 1
// ==============

function findMissingLetter(array) {
  array = array.map(char => char.codePointAt(0))
  let num = array.find((num, i) => array[i + 1] - num === 2)
  let letter = String.fromCharCode(num + 1)
  return letter
}

// ==============
// Tests
// ==============

const Test = require('@codewars/test-compat');

describe("KataTests", function () {
  it("exampleTests", function () {
    Test.assertEquals(findMissingLetter(['a', 'b', 'c', 'd', 'f']), 'e');
    Test.assertEquals(findMissingLetter(['O', 'Q', 'R', 'S']), 'P');
  });
});