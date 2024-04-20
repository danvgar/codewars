// https://www.codewars.com/kata/586a933fc66d187b6e00031a/train/javascript
// First Attempt - Apr 20, 2024

// =============
// Problem
// =============

// You are developing an image hosting website.

// You have to create a function for generating random and unique image filenames.

// Create a function for generating a random 6 character string which will be used to access the photo URL.

// To make sure the name is not already in use, you are given access to an PhotoManager object.

// You can call it like so to make sure the name is unique

// // at this point, the website has only one photo, hosted on the 'ABCDEF' url
// photoManager.nameExists('ABCDEF'); // returns true
// photoManager.nameExists('BBCDEF'); // returns false
// Note: We consider two names with same letters but different cases to be unique.

// ==============
// PREP
// ==============

// Input: none
// Output: string of length 6
// String must be checked with photoManager.nameExists(str) to ensure it doesn't exist yet.
//   Name must not exist in the database yet
//   Upper and lowercase characters are considered different
// Edge Cases: numbers? symbols? just alphabetical upper and lowercase?

// Create random number generator range
// Create random number 6 times, push to array, convert array into string equivalent and join("")
// Check if name exists. If it doesn't, run function again.

// ==============
// Attempt 1
// ==============

function randomLetterGenerator(min, max) {
  const diff = max - min; // 122 - 65 = 57
  let codePoint = Math.floor(Math.random() * diff + min);

  while (codePoint > 90 && codePoint < 97) {
    codePoint = Math.floor(Math.random() * diff + min);
  }

  //   console.log(`\ncodepoint at A: ${"A".codePointAt()}`)
  //   console.log(`codepoint at Z: ${"Z".codePointAt()}`)
  //   console.log(`codepoint at a: ${"a".codePointAt()}`)
  //   console.log(`codepoint at z: ${"z".codePointAt()}`)
  //   console.log(`codepoint generated: ${codePoint}`)
  //   console.log(`letter generated: ${String.fromCodePoint(codePoint)}`);

  return String.fromCodePoint(codePoint);
}

function generateName() {
  let fileNameArr = [];
  let filename = "";
  do {
    for (let i = 0; i < 6; i++) {
      fileNameArr.push(randomLetterGenerator(65, 122));
    }
    filename = fileNameArr.join("");
  } while (photoManager.nameExists(filename));
  // console.log(`\nfileNameArr: ${fileNameArr}`);
  // console.log(`filename: ${filename}`);
  // console.log(`filename.length: ${filename.length}`);

  return filename;
}

// ==============
// Tests
// ==============

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    for (var i = 0; i < 10; i++) {
      var name = generateName();

      Test.assertEquals(typeof name, "string", "Name has to be a string.");
      Test.assertEquals(
        photoManager.nameWasUnique(name),
        true,
        "Name has to be unique."
      );
      Test.assertEquals(name.length, 6, "Name has to be 6 digits long.");
    }
  });
});
