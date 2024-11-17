// https://www.codewars.com/kata/539de388a540db7fec000642/train/typescript
// First Attempt - Nov 17, 2024


// =============
// Problem
// =============

// Story
// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

// Task
// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

// Examples:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

// export function checkCoupon(enteredCode: string, correctCode: string, currentDate: string, expirationDate: string): boolean {
//   // TODO: code me
// }


// ==============
// Attempt 1
// ==============

export function checkCoupon(enteredCode: string, correctCode: string, currentDate: string, expirationDate: string): boolean {

  console.log("Inputs: ", ...arguments);

  interface Months {
    [key: string]: number;
  }

  const MONTHS: Months = {
    "January": 1,
    "February": 2,
    "March": 3,
    "April": 4,
    "May": 5,
    "June": 6,
    "July": 7,
    "August": 8,
    "September": 9,
    "October": 10,
    "November": 11,
    "December": 12,
  }

  const currentYear: number = Number(currentDate.split(" ")[2]);
  const currentMonth: number = MONTHS[currentDate.split(" ")[0]];
  const currentDay: number = Number(currentDate.split(" ")[1].split(",")[0]);
  const expirationYear: number = Number(expirationDate.split(" ")[2]);
  const expirationMonth: number = MONTHS[expirationDate.split(" ")[0]];
  const expirationDay: number = Number(expirationDate.split(" ")[1].split(",")[0]);

  // Check Code
  console.log("enteredCode !== correctCode?", enteredCode !== correctCode);
  if (enteredCode !== correctCode) return false;

  // Check Year
  console.log("currentYear > expirationYear?", currentYear > expirationYear);
  if (currentYear < expirationYear) return true;

  // Check Month
  console.log("currentMonth > expirationMonth?", currentMonth > expirationMonth);
  if (currentMonth < expirationMonth) return true;

  // Check Day
  console.log("currentDay > expirationDay?", currentDay > expirationDay);
  if (currentDay < expirationDay) return true;

  // Default
  return false
}

// ==============
// Attempt 2
// ==============

export function checkCoupon(enteredCode: string, correctCode: string, currentDate: string, expirationDate: string): boolean {

  const current = new Date(currentDate);
  const expiration = new Date (expirationDate);

  if ((current <= expiration) && (enteredCode === correctCode)) return true

  // Default
  return false
}


// ==============
// Tests
// ==============

import { checkCoupon } from './solution'
import { assert } from "chai";

describe("solution", function () {
  it('Basic tests', function () {
    assert.equal(checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014'), true);
    assert.equal(checkCoupon('123a', '123', 'September 5, 2014', 'October 1, 2014'), false);
  });
});