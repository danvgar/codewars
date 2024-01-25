// https://www.codewars.com/kata/5277c8a221e209d3f6000b56/train/javascript
// First Attempt - Nov 25, 2023


// =============
// Problem
// =============

// Write a function that takes a string of braces, and determines if the order of the braces is valid.It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets[], and curly braces { }. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{ }.

// What is considered Valid ?
// A string of braces is considered valid if all braces are matched with the correct brace.

// Examples
// "(){}[]"   => True
// "([{}])"   => True
// "(}"       => False
// "[(])"     => False
// "[({})](]" => False

// function validBraces(braces){
//   //TODO 
// }


// ==============
// PREP
// ==============

// input will be a string of any combination of the following brace types: "({[]})". any edge cases? will string every be empty? will string ever have characters other than these braces?

// output will be a boolean, based on whether these braces are properly open and closed respective of each other.  


// ==============
// Solution 1
// ==============

function validBraces(braces) {
  console.log(`\nInput: ${braces}`)
  // infinity inputs and no clean conditional to test everything. 
  // every time a brace closes, it needs to have been preceded immediately by its respective opening brace. but then we need to keep track of the previous opening braces. and we need a way of tracking if we've finished closing those previous braces or not. 
  // example: "[[]]()"

  // let's create constant strings of opening and closing brackets just to define them better
  const OPEN = "({["
  const CLOSE = ")}]"

  // let's create a stack (first in, last out) of opening braces we encounter in our string
  let braceStack = []

  // loop through string
  for (let i = 0; i < braces.length; i++) {
    console.log(`Current Iteration: ${braces[i]} at index ${i}`)

    if (OPEN.includes(braces[i])) {
      console.log(`OPEN TEST: ${OPEN} includes ${braces[i]}`)
      // if it is an opening brace
      braceStack.push(braces[i])
      console.log(`Pushed ${braces[i]} to stack. Current stack: ${braceStack}`)
      // if we encounter an opening brace, add it to the stack and continue the loop
      continue

    } else if (CLOSE.includes(braces[i])) {
      // if it is a closing brace
      console.log(`CLOSE TEST: ${CLOSE} includes ${braces[i]}`)

      if ((braces[i] === ")" && braceStack[braceStack.length - 1] === "(") ||
        (braces[i] === "}" && braceStack[braceStack.length - 1] === "{") ||
        (braces[i] === "]" && braceStack[braceStack.length - 1] === "[")) {
        // every time we encounter a closing brace, our rule is the last opening brace needs to be its reciprocal.
        braceStack.pop()
        console.log(`Popped ${braces[i]} from stack. Current stack: ${braceStack}`)
        // if we encounter a closing brace and the last item in the stack is it's reciprocal opening brace, pop the last opening brace out of the stack and continue with the loop
        continue

      } else {
        // if we encounter a closing brace and the last item in the stack is NOT its reciprocal, we have failed
        console.log(`CLOSE includes ${braces[i]} but${braceStack[braceStack.length - 1]} isn't reciprocal`)
        return false

      }
    }
    // create switch case helper function to check if opening brace matches closing brace
    // if we ever encounter a closing brace and the last item in the stack is not it's reciprocal opening brace, we return false 
  }
  // if we get through entire loop and braceStack is empty, we have succeeded and we will return true
  console.log(`End of loop. Stack has `)
  return braceStack.length === 0

}

console.log(validBraces("(){}[]"), `Expected: true`)
console.log(validBraces("({[]})"), `Expected: true`)
console.log(validBraces("({})()"), `Expected: true`)
console.log(validBraces("(()"), `Expected: false`)
console.log(validBraces(")))"), `Expected: false`)
console.log(validBraces("(){}]["), `Expected: false`)


// ==============
// Refactoring 1
// ==============

function validBraces(braces) {
  const OPEN = "({["
  const CLOSE = ")}]"

  let braceStack = []

  for (let i = 0; i < braces.length; i++) {
    if (OPEN.includes(braces[i])) {
      braceStack.push(braces[i])
      continue
    } else if (CLOSE.includes(braces[i])) {
      if ((braces[i] === ")" && braceStack[braceStack.length - 1] === "(") ||
        (braces[i] === "}" && braceStack[braceStack.length - 1] === "{") ||
        (braces[i] === "]" && braceStack[braceStack.length - 1] === "[")) {
        braceStack.pop()
        continue
      } else {
        return false
      }
    }
  }
  return braceStack.length === 0
}


// ==============
// Tests
// ==============

const strictEqual = require('chai').assert.strictEqual;

function doTest(braces, expected) {
  const actual = validBraces(braces);
  strictEqual(actual, expected, `for braces:\n"${braces}"\n`);
}

describe("Tests suite", function () {
  it("sample tests", function () {
    doTest("()))", false);
    doTest("()", true);
    doTest("[]", true);
    doTest("{}", true);
    doTest("(){}[]", true);
    doTest("([{}])", true);
    doTest("(}", false);
    doTest("[(])", false);
    doTest("({})[({})]", true);
    doTest("(})", false);
    doTest("(({{[[]]}}))", true);
    doTest("{}({})[]", true);
    doTest(")(}{][", false);
    doTest("())({}}{()][][", false);
    doTest("(((({{", false);
    doTest("}}]]))}])", false);
  });
});