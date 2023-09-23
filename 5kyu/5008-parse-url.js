// https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript
// First Attempt - Sept 21, 2023


// =============
// Problem
// =============

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

// function domainName(url) {
// }

// ==============
// Solution 1
// ==============

function domainName(url) {
  console.log(`\nInput: ${url}`)
  if (url.includes("//")) {
    url = url.split("//")
    url = url[1]
    console.log(`//: ${url}`)
  }
  if (url.includes("www.")) {
    console.log(`www.: ${url}`)
    url = url[1].split("www.")
    url = url[1]
  }
  if (url.includes(".")) {
    console.log(`.: ${url}`)
    url = url[0].split(".")
    url = url[0]
  }
  console.log(url)
  console.log(`Output: ${url}`)
  return url
}


// ==============
// Tests
// ==============

const { assert } = require("chai");

describe("Sample test", () => {
  it("Should pass sample tests", () => {
    assert.equal(domainName("http://google.com"), "google");
    assert.equal(domainName("http://google.co.jp"), "google");
    assert.equal(domainName("www.xakep.ru"), "xakep");
    assert.equal(domainName("https://youtube.com"), "youtube");
  })  
})

