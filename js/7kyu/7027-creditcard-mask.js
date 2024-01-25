// https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript
// First Attempt - July 3, 2023


// =============
// Problem
// =============

// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""

// // "What was the name of your first pet?"
// maskify("Skippy")                                   == "##ippy"
// maskify("Nananananananananananananananana Batman!") == "####################################man!"

// const Test = require('@codewars/test-compat');

// describe("maskify", function(){
//   it("should work for some examples", function(){
//     Test.assertEquals(maskify('4556364607935616'), '############5616');
//     Test.assertEquals(maskify('1'), '1');
//     Test.assertEquals(maskify('11111'), '#1111');
//   });
// });


// ==============
// Solution 1
// ==============

function maskify(cc) {
  // console.log(cc)
  if (cc.length <= 4) {
    return cc
  }
  let maskedCC = [...cc].map((element, index) => {
    if(index < cc.length - 4) {
      // console.log(`Original Element at index ${index}: ${element}`)
      element = "#"
      // console.log(`New Element at index ${index}: ${element}`)
    }
    return element
  }).join("")
  return maskedCC
}


// ==============
// Tests
// ==============

const Test = require('@codewars/test-compat');

describe("maskify", function () {
  it("should work for some examples", function () {
    Test.assertEquals(maskify('4556364607935616'), '############5616');
    Test.assertEquals(maskify('1'), '1');
    Test.assertEquals(maskify('11111'), '#1111');
  });
});