// https://www.codewars.com/kata/56d49587df52101de70011e4/train/typescript
// First Attempt - Oct 18, 2024


// =============
// Problem
// =============

// You have to write a function that describe Leo:

// def leo(oscar):
//   pass

// if oscar was (integer) 88, you have to return "Leo finally won the oscar! Leo is happy".
// if oscar was 86, you have to return "Not even for Wolf of wallstreet?!"
// if it was not 88 or 86 (and below 88) you should return "When will you give Leo an Oscar?"
// if it was over 88 you should return "Leo got one already!"

// export const leo = (oscar: number): string => {
//   return "";
// }

// ==============
// Attempt 1
// ==============

export const leo = (oscar: number): string => {
  if (oscar > 88) {
    return "Leo got one already!"
  }
  else if (oscar === 88) {
    return "Leo finally won the oscar! Leo is happy";
  }
  else if (oscar === 86) {
    return "Not even for Wolf of wallstreet?!"
  }
  else {
    return "When will you give Leo an Oscar?"
  }
}

// ==============
// Tests
// ==============

import { assert } from "chai";
import { leo } from "./solution";

describe("leo", function() {
  it("test", function() {
    assert.strictEqual(leo(89),"Leo got one already!")
    assert.strictEqual(leo(88),"Leo finally won the oscar! Leo is happy")
    assert.strictEqual(leo(87),"When will you give Leo an Oscar?")
    assert.strictEqual(leo(86),"Not even for Wolf of wallstreet?!")
  });
});
