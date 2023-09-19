// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript
// First Attempt - Sept 18, 2023


// =============
// Problem
// =============

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// function pigIt(str){
//   //Code here
// }


// ==============
// Solution 1
// ==============

function pigIt(str) {
  console.log(`\n${str}`)
  let punctuation = "()[].,\/#!$%^&*;:?{}=-_`~"
  str = str.split(" ") // array of words from string
  console.log(str)
  let newStr = []
  for (let word of str) {
    punctionation = punctuation.split("")
    console.log(word.includes(punctuation))
    if (punctuation.includes(word)) {
      newStr.push(word)
      continue
    }
    console.log(word)
    word = word.split("") // each word of string is now an array
    console.log(word)
    word.push(`${word[0]}ay`) // add first letter + "ay" to end of each word
    word.shift() // remove first letter of each word
    console.log(word)
    word = word.join("")
    console.log(word)
    newStr.push(word)
  }
  newStr = newStr.join(" ")
  console.log(newStr)
  return newStr
}


// ==============
// Tests
// ==============

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(pigIt('Pig latin is cool'), 'igPay atinlay siay oolcay')
    Test.assertEquals(pigIt('This is my string'), 'hisTay siay ymay tringsay')
  });
});
