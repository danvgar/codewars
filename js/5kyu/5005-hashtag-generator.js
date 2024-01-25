// https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript
// First Attempt - Sept 21, 2023


// =============
// Problem
// =============

// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

// function generateHashtag (str) {
// }


// ==============
// Solution 1
// ==============

function generateHashtag(str) {
  console.log(`\nInput: ${str}`)

  // If the input or the result is an empty string it must return false.
  if (str.trim() === "") return false

  // remove falsy values from string
  str = str.split(" ").filter(word => word).join(" ")

  // All words must have their first letter capitalized.
  str = str.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join("")

  // It must start with a hashtag (#).
  str = "#" + str

  console.log(`Output: ${str}`)

  // If the final result is longer than 140 chars it must return false.
  // If the input or the result is an empty string it must return false.
  return ((str.length > 140) || (str === "")) ? false : str

}

// ==============
// Refactored 1
// ==============

function generateHashtag(str) {
  if (str.trim() === "") return false
  str = "#" + str.split(" ").filter(word => word).map(word => word[0].toUpperCase() + word.slice(1)).join("")
  return ((str.length > 140) || (str === "")) ? false : str
}


// ==============
// Tests
// ==============

const { assert } = require('chai');

describe("Tests", () => {
  it("Sample tests", () => {
    assert.strictEqual(generateHashtag(""), false, "Expected an empty string to return false")
    assert.strictEqual(generateHashtag(" ".repeat(200)), false, "Still an empty string")
    assert.strictEqual(generateHashtag("Do We have A Hashtag"), "#DoWeHaveAHashtag", "Expected a Hashtag (#) at the beginning.")
    assert.strictEqual(generateHashtag("Codewars"), "#Codewars", "Should handle a single word.")
    assert.strictEqual(generateHashtag("Codewars Is Nice"), "#CodewarsIsNice", "Should remove spaces.")
    assert.strictEqual(generateHashtag("Codewars is nice"), "#CodewarsIsNice", "Should capitalize first letters of words.")
    assert.strictEqual(generateHashtag("code" + " ".repeat(140) + "wars"), "#CodeWars")
    assert.strictEqual(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"), false, "Should return false if the final word is longer than 140 chars.")
    assert.strictEqual(generateHashtag("a".repeat(139)), "#A" + "a".repeat(138), "Should work")
    assert.strictEqual(generateHashtag("a".repeat(140)), false, "Too long")
  });
});

