// https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript
// First Attempt - July 26, 2023


// =============
// Problem
// =============

// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

// For example:

// Let's say you are given the array {1,2,3,4,3,2,1}:
// Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

// Let's look at another one.
// You are given the array {1,100,50,-51,1,1}:
// Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

// Last one:
// You are given the array {20,10,-80,10,10,15,35}
// At index 0 the left side is {}
// The right side is {10,-80,10,10,15,35}
// They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
// Index 0 is the place where the left side and right side are equal.

// Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

// Input:
// An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

// Output:
// The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

// Note:
// If you are given an array with multiple answers, return the lowest correct index.

// P: input will be an integer array of positive, zero, or negative numbers. 
// R: output will be the index of the index such that the remaining integers on either side have equal sums. for empty arrays, return 0. if no index, return -1

// E: 
// {1,2,3,4,3,2,1} -> index 3 (1 + 2 + 3 === 3 + 2 + 1)
// {1,100,50,-51,1,1} -> index 1 (1 === 50 + -1 + 1 + 1)
// {20,10,-80,10,10,15,35} -> index 0 (0 === 20 + 10 + -80 + 10 + 10 + 15 + 35)

// P:
// if array is empty, return 0
// else, for i = 0, i < array.length, i++ {
// if (i = 0, reduce(acc, c, index) => {
// if (index > i) {
//   return acc + c
// }
// if (i = array.length - 1, reduce(acc, c, index) => {
// if (index < i) {
//   return acc + c
// }
// else {
// sum left side of index
//   for (l = 0, l <= i, l++) {
// leftSum += array[l]
//   }
// sum right side of index
// if (leftSum === rightSum) {
//   return i
// }


// ==============
// Solution 1
// ==============

function findEvenIndex(arr) {
  // If array length is 0, return 0
  console.log(`Given Array: ${arr}`)
  console.log(`Array Length: ${arr.length} \n`)
  
  if (arr.length === 0) {
    return 0
  }
  
  for (let i = 0; i < arr.length; i++) {
    // console.log(`***** For index ${i} ***** \n`)
    //  Sum integers to the right of current index
    let rightSum = arr.reduce((acc,c,index) => {
      // console.log(`Right Sum Acc: ${acc}`)
      // console.log(`Right Sum Current Value: ${c}`)
      // console.log(`Right Sum Index: ${index}`)
      if (index <= i) {
        return acc 
      } else 
      if (index > i) {
        return acc + c
      }
    }, 0) // initial value of 0
    // console.log(`Final Right Sum for index ${i}: ${rightSum} \n`)
    
    
    //  Sum integers to the left of current index
    let leftSum = arr.reduce((acc,c,index) => {
      if(i === 0) {
        return 0
      } else
      // console.log(`Left Sum Acc: ${acc}`)
      // console.log(`Left Sum Current Value: ${c}`)
      // console.log(`Left Sum Index: ${index}`)
      if (index >= i) {
        return acc
      } else
      if (index < i) {
        return acc + c
      }
    }, 0) // initial value of 0
    // console.log(`Final Left Sum for index ${i}: ${leftSum} \n`)
    
    
    // Compare sums, if equal return current index
    console.log(`${leftSum} === ${rightSum}? ${rightSum === leftSum} \n`)
    if (rightSum === leftSum) {
      // console.log(`************************************`)
      // console.log(`************************************`)
      // console.log(`************************************`)
      console.log(`Hooray! Final answer is index ${i}`)
      // console.log(`************************************`)
      // console.log(`************************************`)
      // console.log(`************************************ \n`)
      return i
    } else if(rightSum !== leftSum && i === arr.length - 1) {
      return -1
    }
  }
}

// ==============
// Tests
// ==============

const Test = require('@codewars/test-compat');

describe("FindEvenIndex", function () {
  it("Tests", function () {
    Test.assertEquals(findEvenIndex([1, 2, 3, 4, 3, 2, 1]), 3, "The array was: [1,2,3,4,3,2,1] \n");
    Test.assertEquals(findEvenIndex([1, 100, 50, -51, 1, 1]), 1, "The array was: [1,100,50,-51,1,1] \n");
    Test.assertEquals(findEvenIndex([1, 2, 3, 4, 5, 6]), -1, "The array was: [1,2,3,4,5,6] \n");
    Test.assertEquals(findEvenIndex([20, 10, 30, 10, 10, 15, 35]), 3, "The array was: [20,10,30,10,10,15,35] \n");
  });
});