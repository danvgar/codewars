// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript
// First Attempt - June 29, 2023


// =============
// Problem
// =============

// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

// function DNAStrand(dna){
//   //your code here
// }

// P: input is a string of A, T, C, and G characters
// R: output is the same string with each A swapped with a T, each T swapped with an A, each C swapped with a G, and each G swapped with a C.
// E: ATTGC -> TAACG
// P: turn string into an array. map the array with a switch case per character


// ==============
// Solution 1
// ==============

function DNAStrand(dna){
  dna = [...dna].map((element) => {
    if(element === "A") {
      return element = "T"
    } else if (element === "T") {
      return element = "A"
    } else if(element === "C") {
      return element = "G"
    } else if (element === "G") {
      return element = "C"
    }
  })
  return dna.join("")
}


// ==============
// Tests
// ==============

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(DNAStrand("AAAA"),"TTTT","String AAAA is")
    assert.strictEqual(DNAStrand("ATTGC"),"TAACG","String ATTGC is")
    assert.strictEqual(DNAStrand("GTAT"),"CATA","String GTAT is")   
  })
})