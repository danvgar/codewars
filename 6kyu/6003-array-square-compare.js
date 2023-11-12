// https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript
// First Attempt - Apr 6, 2023
// Second Attempt - Nov 11, 2023


// =============
// Problem
// =============

// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

// a = [121, 144, 19, 161, 19, 144, 19, 11] 
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
// Invalid arrays
// If, for example, we change the first number to something else, comp is not returning true anymore:

// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 132 is not the square of any number of a.

// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 36100 is not the square of any number of a.

// Remarks
// a or b might be [] or {} (all languages except R, Shell).
// a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).
// If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.

// Note for C
// The two arrays have the same size (> 0) given as parameter in function comp.

// function comp(array1, array2){
//     //your code here
// }


// ==============
// PREP
// ==============

// input will be two integer arrays (or two objects??). input may also be an empty array or null, in which case it should return false.
// will a or b ever be strings as numbers? null or empty elements but not full arrays?
// confirm only have to check if b is a**2, and not if a is b**2?

// output will be a boolean, which will be true if for every element in a there is a corresponding element in b that is the square of that element in a. If the element appears more than once in a, it must also have the same frequency of matches in b. if this doesn't work out, or a or b is empty or null, return false


// ==============
// Solution 1
// ==============

function comp(array1, array2) {
    if (!(array1 && array2)) {
        // if either array1 or array2 are falsy values (e.g. null or undefined)
        return false
    }
    // sort arrays from largest to smallest so easier to evaluate one element at a time
    array1.sort((a, b) => a - b)
    array2.sort((a, b) => a - b)

    for (let i = 0; i < array1.length; i++) {
        if (array1[i]**2 !== array2[i]) {
            // if array1 ever has an element that doesn't directly match one in b squared, return false
            return false
        }
    }
    // if successfully got through all of this and never returned false, return true
    return true
}


// ==============
// Solution 2
// ==============

// write solution using array method every()

function comp(array1, array2) {
    if (!(array1 && array2)) {
        return false
    }
    array1.sort((a, b) => a - b)
    array2.sort((a, b) => a - b)
    
    return array2.every( (num, i) => num === array1[i]**2 )
}

// ==============
// Tests
// ==============

const { assert } = require('chai');

describe("Tests", () => {
    it("test", () => {
        let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
        let a2 = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];
        assert.isTrue(comp(a1, a2));
    });
});
