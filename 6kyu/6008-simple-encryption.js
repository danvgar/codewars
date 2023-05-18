// https://www.codewars.com/kata/57814d79a56c88e3e0000786/train/javascript
// First Attempt - May 16, 2023


// =============
// Problem
// =============

// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

// function encrypt(text, n) {

// }

// function decrypt(encryptedText, n) {
// }

// P: first parameter is a string. Second parameter is an integer. If string S is empty or integer N is not positive, return the string argument without changes.
// R: result should be a string of every odd-index characters, concatenated with a string of every even-index characters. second function should be able to do the reverse N times to get back the original. spaces are considered characters.
// E: 
// if S is empty OR N is less than 1, return S. 
// else text = encryptedText.
// convert encryptedText to array.
// for loop, i < N times, i = 0 
// for loop, j < stringArray.length, j = 0 
// create two empty arrays for odd and even indices. 
// if j is even (i % 2 === 0), evenString.push(stringArray[j]). else j is odd, oddString.push(stringArray[j])
// encryptedText = evenString.join("") + oddString.join("")
// return encryptedText


// ==============
// Solution 1
// ==============

function encrypt(text, n) {
    console.log("Original String: " + text)
    console.log("Original Number: " + n)
    if(text === undefined) {
        return ""
    } else if(text === null) {
        return null
    } else if(text.length === 0 || n < 1) {
        console.log("Final Text: " + text)
        return text
    } else {
        let encryptedText = [...text]
        let evenArray = []
        let oddArray = []
        for(let i = 0; i < n; i++) {
            oddArray = []
            evenArray = []
            for(let j = 0; j < encryptedText.length; j++) {
                if(j % 2 === 0) {
                    evenArray.push(encryptedText[j])
                } else { 
                    oddArray.push(encryptedText[j])
                }
            }
            console.log("Odd Array Number " + i + ": " + oddArray.join(""))
            console.log("Even Array Number " + i + ": " + evenArray.join(""))
            
            encryptedText = oddArray.join("") + evenArray.join("")
            console.log("New Encrypted Text Number " + i + ": " + encryptedText)
        }
        console.log("Final Text: " + encryptedText)
        return encryptedText
    }
}

function decrypt(encryptedText, n) {
    console.log("Original String: " + encryptedText)
    console.log("Original Number: " + n)
    console.log("Original String Length: " + encryptedText.length)

    if(encryptedText === undefined) {
        return ""
    } else if(encryptedText === null) {
        return null
    } else if(encryptedText.length === 0 || n < 1) {
        return encryptedText
    } else {
        let decryptedText = [...encryptedText]
        let evenArray = []
        let oddArray = []
        // for(let i = 0; i < n; i++) {
        //     oddArray = []
        //     evenArray = []
        //     for(let j = 0; j < decryptedText.length; j++) {
        //         if(j % 2 === 0) {
        //             evenArray.push(decryptedText[Math.floor(decryptedText.length/2)])
        //             evenArray.splice(Math.floor(decryptedText.length/2))
        //         } else { 
        //             oddArray.push(decryptedText[Math.floor(decryptedText.length/2)])
        //         }
        //     }
        //     console.log("Odd Array Number " + i + ": " + oddArray.join(""))
        //     console.log("Even Array Number " + i + ": " + evenArray.join(""))
            
        //     decryptedText = oddArray.join("") + evenArray.join("")
        //     console.log("New Encrypted Text Number " + i + ": " + decryptedText)
        // }
        console.log(`Final Text: ${decryptedText} \n \n`)
        return decryptedText
    }
}

// got everything to work except decryption. need to revisit.

// ==============
// Tests
// ==============

const Test = require('@codewars/test-compat');

describe("Solution", function(){
    it("EncryptExampleTests", function(){    
        Test.assertEquals(encrypt("This is a test!", 0), "This is a test!");
        Test.assertEquals(encrypt("This is a test!", 1), "hsi  etTi sats!");
        Test.assertEquals(encrypt("This is a test!", 2), "s eT ashi tist!");
        Test.assertEquals(encrypt("This is a test!", 3), " Tah itse sits!");
        Test.assertEquals(encrypt("This is a test!", 4), "This is a test!");
        Test.assertEquals(encrypt("This is a test!", -1), "This is a test!");
        Test.assertEquals(encrypt("This kata is very interesting!", 1), "hskt svr neetn!Ti aai eyitrsig");
    });
});

describe("Solution", function(){
    it("DecryptExampleTests", function(){    
        Test.assertEquals(decrypt("This is a test!", 0), "This is a test!");
        Test.assertEquals(decrypt("hsi  etTi sats!", 1), "This is a test!");
        Test.assertEquals(decrypt("s eT ashi tist!", 2), "This is a test!");
        Test.assertEquals(decrypt(" Tah itse sits!", 3), "This is a test!");
        Test.assertEquals(decrypt("This is a test!", 4), "This is a test!");
        Test.assertEquals(decrypt("This is a test!", -1), "This is a test!");
        Test.assertEquals(decrypt("hskt svr neetn!Ti aai eyitrsig", 1), "This kata is very interesting!");
    });
});

describe("Solution", function(){
    it("Null or Empty", function(){    
        Test.assertEquals(encrypt("", 0), "");
        Test.assertEquals(decrypt("", 0), "");
        Test.assertEquals(encrypt(null, 0), null);
        Test.assertEquals(decrypt(null, 0), null);
    });
});