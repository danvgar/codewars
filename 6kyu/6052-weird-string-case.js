// https://www.codewars.com/kata/52b757663a95b11b3d00062d/train/javascript
// First Attempt - Dec 7, 2023


// =============
// Problem
// =============

// Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// Examples:
// "String" => "StRiNg"
// "Weird string case" => "WeIrD StRiNg CaSe"

// function toWeirdCase(string){
//   //TODO
// }


// ==============
// PREP
// ==============

// input will be a string of alphabetical characters and spaces. spaces are only present for multiple words, and words are only separated by a single space.

// output will be the same string in the same order and same space placement, but each word will have alternating uppercase and lowercase, with even numbered indices representing uppercase and odd numbered indices representing lowercase.

// the alternating starts over at each word. the first letter of each word should be treated as index 0 and thus uppercase, and the next letter would be treated as index 1 and thus lowercase.




function toWeirdCase(string) {
  console.log(`Input: ${string}`)
  // use arrays to iterate
  // split string by spaces -> split(" ")
  let arr = string.split(" ")

  // for-loop through array of words -> could arguably be a map()
  for (let i = 0; i < arr.length; i++) {
    console.log(`Start of loop. word is: ${arr[i]}`)

    // run helper function for each element of array -> map()??
    arr[i] = arr[i].split("").map((char, i) => i % 2 === 0 ? char.toUpperCase() : char.toLowerCase()).join("")
    // // for each index of word, if i % 2 === 0 -> even (uppercase), else i % 2 === 1 -> odd (lowercase)
    // // do we want to split each word itself to treat it as an array? -> split("")
    // // don't forget to join split words back into one word -> join("")
    console.log(`End of loop. mapped word is: ${arr[i]}`)
    console.log(`End of loop. new array is: ${arr}`)
  }

  // join string by spaces -> join(" ")
  // return string
  console.log(`Output: ${arr.join(" ")}`)
  return arr.join(" ")
}

console.log(toWeirdCase("String"), "StRiNg")
console.log(toWeirdCase("Weird string case"), "WeIrD StRiNg CaSe")


// ==============
// Refactoring 1
// ==============

function toWeirdCase(string) {
  // break string delimited by spaces into an array of words
  let arr = string.split(" ")

  // iterate over array
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i]
    // split each word into an array of characters
      .split("")
      // if char is even (i % 2 === 0), make it uppercase, else make it lowercase
      .map((char, i) => i % 2 === 0 ? char.toUpperCase() : char.toLowerCase())
      // combine element back into a single string 
      .join("")
  }
  
  // join array of words back into a sentence separated by spaces
  return arr.join(" ")
}


// ==============
// Tests
// ==============

const Test = require('@codewars/test-compat');

describe('toWeirdCase', function () {
  it('should return the correct value for a single word', function () {
    Test.assertEquals(toWeirdCase('This'), 'ThIs');
    Test.assertEquals(toWeirdCase('is'), 'Is');
  });
  it('should return the correct value for multiple words', function () {
    Test.assertEquals(toWeirdCase('This is a test'), 'ThIs Is A TeSt');
  });
});