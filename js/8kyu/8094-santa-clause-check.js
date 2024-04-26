// https://www.codewars.com/kata/52b50a20fa0e77b304000103/train/javascript
// First Attempt - Apr 25, 2024

// =============
// Problem
// =============

// You probably know, that in Javascript (and also Ruby) there is no concept of interfaces. There is only a concept of inheritance, but you can't assume that a certain method or property exists, just because it exists in the parent prototype / class. We want to find out, whether a given object fulfils the requirements to implement the "SantaClausable" interface. We need to implement a method which checks for this interface.

// Rules
// The SantaClausable interface is implemented, if all of the following methods are defined on an object:

// sayHoHoHo() / say_ho_ho_ho
// distributeGifts() / distribute_gifts
// goDownTheChimney() / go_down_the_chimney
// Example
// var santa = {
//     sayHoHoHo: function() { console.log('Ho Ho Ho!') },
//     distributeGifts: function() { console.log('Gifts for all!'); },
//     goDownTheChimney: function() { console.log('*whoosh*'); }
// };

// var notSanta = {
//     sayHoHoHo: function() { console.log('Oink Oink!') }
//     // no distributeGifts() and no goDownTheChimney()
// };

// isSantaClausable(santa); // must return TRUE
// isSantaClausable(notSanta); // must return FALSE
// Additional Information on this Topic
// Duck Typing (Wikipedia)

// function isSantaClausable(obj) {
//   // TODO
// }

// ==============
// Solution 1
// ==============

function isSantaClausable(obj) {
  let methodArr = ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney']
  return methodArr.every( (functionName, i) => typeof obj[functionName] === 'function')
}

// ==============
// Tests
// ==============

describe("Tests", () => {
  it("test", () => {
    var john = new Person("john", 34);
    Test.assertEquals(john.info, "johns age is 34");
  });
});
