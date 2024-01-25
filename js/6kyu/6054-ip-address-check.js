// https://www.codewars.com/kata/515decfd9dcfc23bb6000006/train/javascript
// First Attempt - Dec 12, 2023


// =============
// Problem
// =============

// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

// Valid inputs examples:
// 1.2.3.4
// 123.45.67.89

// Invalid input examples:
// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089

// Notes:
// Leading zeros (e.g. 01.02.03.04) are considered invalid
// Inputs are guaranteed to be a single string

// function isValidIP(str) {
//   return false;
// }

// ==============
// PREP
// ==============

// input will be a string 

// output will be true or false, based on whether the string represents a valid IPv4 address.

// valid requires the following to be true
// // if length of array is not 4
// // string is exactly four integers, split by 3 dots
// // each integer is a number from 0 - 255 inclusive
// // each integer does not have leading zeroes 
// // if octets contain anything other than numbers

// if any of the above are not true, return false


// ==============
// Solution 1
// ==============

function isValidIP(str) {
  console.log(`\nInput: ${str}`)
  // split string into array by "." -> split(".")
  let arr = str.split(".")
  console.log(`Array: ${arr}`)
  // if arr.length !== 4, return false
  if (arr.length !== 4) {
    console.log(`Length not equal to 4`)
    return false
  }
  // if some string starts with 0 && string.length > 1, return false
  if (arr.some(octet => octet[0] === "0" && octet.length > 1)) {
    console.log(`Leading zeroes`)
    return false
  }
  // if Number(string) < 0 or > 255, return false 
  if (arr.some(octet => Number(octet) < 0 || Number(octet) > 255)) {
    console.log(`Integers not 0-255`)
    return false
  }
  // if octet is not an integer
  if (arr.some(octet => !Number.isInteger(+octet) || octet.includes("e"))) {
    console.log(`Not numbers`)
    return false
  }
  // if octet includes spaces
  if (arr.some(octet => octet.trim().length !== octet.length)) {
    console.log(`Has white space`)
    return false
  }
  // octet length is 0
  if (arr.some(octet => octet.length === 0)) {
    console.log(`Has octets length of 0`)
    return false
  }
  // if none of these conditions are have been met, return true
  return true
}


// ==============
// Refactoring 1
// ==============

function isValidIP(str) {
  let arr = str.split(".")
  if (arr.length !== 4) return false
  if (arr.some(octet => octet[0] === "0" && octet.length > 1)) return false
  if (arr.some(octet => Number(octet) < 0 || Number(octet) > 255)) return false
  if (arr.some(octet => !Number.isInteger(+octet) || octet.includes("e"))) return false
  if (arr.some(octet => octet.trim().length !== octet.length)) return false
  if (arr.some(octet => octet.length === 0)) return false
  return true
}


// ==============
// Tests
// ==============

const { assert } = require('chai');

describe("Sample tests", () => {
  it("Examples", () => {
    assert.strictEqual(isValidIP("0.0.0.0"), true);
    assert.strictEqual(isValidIP("12.255.56.1"), true);
    assert.strictEqual(isValidIP("137.255.156.100"), true);
    assert.strictEqual(isValidIP(''), false);
    assert.strictEqual(isValidIP('abc.def.ghi.jkl'), false);
    assert.strictEqual(isValidIP('123.456.789.0'), false);
    assert.strictEqual(isValidIP('12.34.56'), false);
    assert.strictEqual(isValidIP('01.02.03.04'), false);
    assert.strictEqual(isValidIP('256.1.2.3'), false);
    assert.strictEqual(isValidIP('1.2.3.4.5'), false);
    assert.strictEqual(isValidIP('123,45,67,89'), false);
    assert.strictEqual(isValidIP('1e0.1e1.1e2.2e2'), false);
    assert.strictEqual(isValidIP(' 1.2.3.4'), false);
    assert.strictEqual(isValidIP('1.2.3.4 '), false);
    assert.strictEqual(isValidIP('12.34.56.-7'), false);
    assert.strictEqual(isValidIP('1.2.3.4\n'), false);
    assert.strictEqual(isValidIP('\n1.2.3.4'), false);
  });
});