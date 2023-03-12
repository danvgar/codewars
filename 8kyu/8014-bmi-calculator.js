// https://www.codewars.com/kata/57a429e253ba3381850000fb/train/javascript
// First Attempt - Mar 12, 2023

// =============
// Problem
// =============

// Write function bmi that calculates body mass index (bmi = weight / height^2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"


// ==============
// Solution 1
// ==============

// function bmi(weight, height) {
//     return "";
// }

function bmi(weight, height) {
    let bmi = weight / height ** 2
    
    if (bmi <= 18.5) {
        return "Underweight"
    } else if(bmi <= 25.0) {
        return "Normal"
    } else if(bmi <= 30.0) {
        return "Overweight" 
    } else {
        return "Obese"
    }   
}


// ==============
// Tests
// ==============

const Test = require('@codewars/test-compat');

describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(bmi(80, 1.80), "Normal");
    });
});
