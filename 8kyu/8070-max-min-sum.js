// https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript
// First Attempt - June 11, 2023


// =============
// Problem
// =============

// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

// function sumArray(array) {

// }

// P: input will be an integer string, or an empty value (e.g. null, empty array, "", etc)
// R: output will be a single integer, the sum of the integer array without the highest and lowest value (note this is independent of index). if null or array only has one element, return 0
// E: [6, 2, 1, 8, 10] -> 16
// P: sort array, remove first and last element (shift, pop), then sum remaining array



// ==============
// Solution 1
// ==============

function sumArray(array) {
  if(array === null || array === undefined) {
    return 0
  } else if (array.length < 3){
    return 0
  }
  array = array.sort( (a,b) => a - b)
  array.pop()
  array.shift()
  return array.reduce( (acc,c) => acc + c, 0)
}


// ==============
// Tests
// ==============

const {assert} = require("chai");

it("example tests", ()=>{
  assert.strictEqual( sumArray(null)                     , 0 );
  assert.strictEqual( sumArray([ ])                      , 0 );
  assert.strictEqual( sumArray([ 3 ])                    , 0 );
  assert.strictEqual( sumArray([ 3, 5 ])                 , 0 );
  assert.strictEqual( sumArray([ 6, 2, 1, 8, 10 ])       , 16 );
  assert.strictEqual( sumArray([ 0, 1, 6, 10, 10 ])      , 17 );
  assert.strictEqual( sumArray([ -6, -20, -1, -10, -12 ]), -28 );
  assert.strictEqual( sumArray([ -6, 20, -1, 10, -12 ])  , 3 );
});