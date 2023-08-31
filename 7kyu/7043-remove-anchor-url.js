// https://www.codewars.com/kata/51f2b4448cadf20ed0000386/train/javascript
// First Attempt - Aug 30, 2023


// =============
// Problem
// =============

// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

// function removeUrlAnchor(_url){
//   // TODO: complete
// }


// ==============
// Solution 1
// ==============

function removeUrlAnchor(url) {
  url = url.split("#")
  return url[0]
}

// #firsttryyyyy

// ==============
// Tests
// ==============

const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(removeUrlAnchor('www.codewars.com#about'), 'www.codewars.com')
    assert.strictEqual(removeUrlAnchor('www.codewars.com/katas/?page=1#about'), 'www.codewars.com/katas/?page=1')
    assert.strictEqual(removeUrlAnchor('www.codewars.com/katas/'), 'www.codewars.com/katas/')
  })
})