// https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript
// First Attempt - Apr 6, 2023


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
// Solution 1
// ==============

function comp(array1, array2){
    console.log(`Starting Array 1: ${array1}`)
    console.log(`Starting Array 2: ${array2}`)
    
    // if (myStr === null || myStr.trim() === "") {
    //     console.log("This is an empty string!");
    // } else {
    //     console.log("This is not an empty string!");
    // }
    
    let i = 0
    if((array1 === null && array2 === null) || (array1.length === 0 && array2.length === 0)) {
        return true
    } else if(array1 === null || array2 === null || array1.length === 0 || array2.length === 0) {
        return false
    } else {     
        array1 = array1.map(a => a*a)
        console.log(`Squared Array 1: ${array1}`)
        while(i < array1.length) {
            if (array1.includes(array2[i]) && array1.filter((a) => (a === array1[i])).length === array2.filter((a) => (a === array2[i])).length) {
                console.log(`${array1.includes(array2[i])} at index ${i} of array2`)
                i++
            } else {
                console.log(`${array1.includes(array2[i])} at index ${i} of array2`)
                return false
                break
            }
            return true
        }
    }
}

// need to revisit


// ==============
// Tests
// ==============

const { assert } = require('chai');

describe("Tests", () => {
    it("test", () => {
        let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
        let a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
        assert.isTrue(comp(a1, a2));
    });
});
