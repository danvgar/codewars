// https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript
// First Attempt - May 12, 2023


// =============
// Problem
// =============

// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.

// function friend(friends){
//   //your code here
// }

// P: input will be an array of strings. no need to test null or undefined input.
// R: result should be the input with all strings not equal to 4 characters in length filtered out
// E: ["Ryan", "Kieran", "Mark"] -> ["Ryan", "Mark"]
// P: filter(a => a.length === 4)


// ==============
// Solution 1
// ==============

function friend(friends){
  return friends.filter(a => a.length === 4)
}


// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"])
    assert.deepEqual(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"])
    assert.deepEqual(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]), ["Jimm", "Cari", "aret"])
    assert.deepEqual(friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"])
  })
})

