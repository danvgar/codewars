// https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript
// First Attempt - Sept 18, 2023


// =============
// Problem
// =============

// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// Examples (input --> output):
// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"

// function rgb(r, g, b) {
// }


// ==============
// Solution 1
// ==============

function rgb(r, g, b) {
  let rgb = Array.from(arguments)
  let hex = []
  console.log(`\nInitial rgb: ${rgb}`)
  console.log(`Initial hex: ${hex}`)

  for (let val of rgb) {
    if (val < 0) {
      val = 0
    }
    if (val > 255) {
      val = 255
    }
    hex.push(Math.floor(val / 16))
    hex.push(val % 16)
    console.log(`For Loop hex: ${hex}`)
  }
  
  for (let i in hex) {
    switch (hex[i]) {
      case 10:
        hex[i] = "A"
        break;
      case 11:
        hex[i] = "B"
        break;
      case 12:
        hex[i] = "C"
        break;
      case 13:
        hex[i] = "D"
        break;
      case 14:
        hex[i] = "E"
        break;
      case 15:
        hex[i] = "F"
        break;
    }
  }

  console.log(`Final hex: ${hex.join("")}`)
  return hex.join("")
}


// ==============
// Tests
// ==============

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("Basic Tests", () => {
    Test.assertEquals(rgb(0, 0, 0), '000000')
    Test.assertEquals(rgb(0, 0, -20), '000000')
    Test.assertEquals(rgb(300, 255, 255), 'FFFFFF')
    Test.assertEquals(rgb(173, 255, 47), 'ADFF2F')
  });
});
