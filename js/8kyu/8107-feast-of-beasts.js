// https://www.codewars.com/kata/5aa736a455f906981800360d/train/javascript
// First Attempt - June 30, 2024

// =============
// Problem
// =============

// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

// function feast(beast, dish) {
//   //your function here
// }

// ==============
// Solution 1
// ==============

// Input: Two arguments as string: animal name and dish name.

// Output: Return true or false based on whether the dish starts and ends with same letters as animal's name.

// Edge-cases:
// Will arguments always be strings? Will there always be two arguments? Any funny business (null, NaN, etc)?
// Strings always lowercase, at least two letters, may have hyphens or spaces, no white space at ends of string. No numerals, symbols, etc.

function feast(beast, dish) {
  const dishFirstLetter = dish[0];
  const beastFirstLetter = beast[0];
  const dishLastLetter = dish.slice(-1);
  const beastLastLetter = beast.slice(-1);

  console.log("Beast: ", beast, "- Dish: ", dish);
  console.log(
    "Letters: ",
    dishFirstLetter,
    beastFirstLetter,
    dishLastLetter,
    beastLastLetter
  );

  return (
    dishFirstLetter === beastFirstLetter && dishLastLetter === beastLastLetter
  );
}

console.log(feast("great blue heron", "garlic naan"), true);
console.log(feast("chickadee", "chocolate cake"), true);
console.log(feast("brown bear", "bear claw"), false);

// ==============
// Tests
// ==============

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(feast("great blue heron", "garlic naan"), true);
    Test.assertEquals(feast("chickadee", "chocolate cake"), true);
    Test.assertEquals(feast("brown bear", "bear claw"), false);
  });
});
