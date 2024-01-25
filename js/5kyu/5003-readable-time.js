// https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript
// First Attempt - Sept 18, 2023


// =============
// Problem
// =============

// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

// function humanReadable (seconds) {
//   return '';
// }


// ==============
// Solution 1
// ==============

function humanReadable(seconds) {
  // console.log(`\nInput: ${seconds}`)
  let hh = 0
  let mm = 0
  let ss = seconds

  // tests
  // let isSecondsMod60Zero = ss % 60 === 0
  // let isMinutesMod60Zero = mm % 60 === 0
  // let isHoursMod60Zero = hh % 60 === 0
  // let modSeconds60 = ss % 60
  // let modMinutes60 = mm % 60
  // let modHours60 = hh % 60
  let floorSeconds = Math.floor(ss / 60)
  let floorMinutes = Math.floor(ss / 3600)
  // let floorHours = Math.floor(ss / 3600)

  // console.log(`Is ss % 60 === 0?: ${isSecondsMod60Zero}`)
  // console.log(`Is mm % 60 === 0?: ${isMinutesMod60Zero}`)
  // console.log(`Is hh % 60 === 0?: ${isHoursMod60Zero}`)
  // console.log(`What is ss % 60?: ${modSeconds60}`)
  // console.log(`What is mm % 60?: ${modMinutes60}`)
  // console.log(`What is hh % 60?: ${modHours60}`)
  // console.log(`What is floor ss / 60?: ${floorSeconds}`)
  // console.log(`What is floor ss / 60?: ${floorMinutes}`)
  // console.log(`What is floor ss / 3660?: ${floorHours}`)
  // console.log(`What is floorSeconds % 60?: ${floorSeconds % 60}`)
  // console.log(`What is floorMinutes % 60?: ${floorMinutes % 60}`)
  // console.log(`What is floorHours % 60?: ${floorHours % 60}`)
  // console.log(`Is ss < 60?: ${ss < 60}`)
  // console.log(`Is ss < 3600?: ${ss < 3600}`)

  if (ss >= 3600) {
    ss = ss % 60
    mm = floorSeconds % 60
    hh = floorMinutes
  } else if (ss >= 60) {
    ss = ss % 60
    mm = floorSeconds
  }

  hh = hh.toString().padStart(2, '0')
  mm = mm.toString().padStart(2, '0')
  ss = ss.toString().padStart(2, '0')

  // console.log(`Output: ${hh}:${mm}:${ss}`)
  return `${hh}:${mm}:${ss}`
}

// need to investigate - for some reason this code only works with the floor variables on lines 40, 41. Does not work if their full function value is replaced in lines 61,62,65


// ==============
// Tests
// ==============

const strictEqual = require("chai").assert.strictEqual;

describe('tests', function () {
  it('should format correctly', function () {
    strictEqual(humanReadable(0), '00:00:00', 'humanReadable(0)');
    strictEqual(humanReadable(59), '00:00:59', 'humanReadable(59)');
    strictEqual(humanReadable(60), '00:01:00', 'humanReadable(60)');
    strictEqual(humanReadable(90), '00:01:30', 'humanReadable(90)');
    strictEqual(humanReadable(3599), '00:59:59', 'humanReadable(3599)');
    strictEqual(humanReadable(3600), '01:00:00', 'humanReadable(3600)');
    strictEqual(humanReadable(45296), '12:34:56', 'humanReadable(45296)');
    strictEqual(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
    strictEqual(humanReadable(86400), '24:00:00', 'humanReadable(86400)');
    strictEqual(humanReadable(359999), '99:59:59', 'humanReadable(359999)');
  });
});