// https://www.codewars.com/kata/56fbdda707cff41b68000de2/train/javascript
// First Attempt - May 6, 2024

// =============
// Problem
// =============

// Fun with ES6 Classes #3 - Cuboids, Cubes and Getters
// Task
// Define the following classes.

// I. Cuboid
// The object constructor for the class Cuboid should receive exactly three arguments in the following order: length, width, height and store these three values in this.length, this.width and this.height respectively.

// The class Cuboid should then have a getter surfaceArea which returns the surface area of the cuboid and a getter volume which returns the volume of the cuboid.

// II. Cube
// class Cube is a subclass of class Cuboid. The constructor function of Cube should receive one argument only, its length, and use that value passed in to set this.length, this.width and this.height.

// Hint: Make a call to super, passing in the correct arguments, to make life easier ;)

// Related Articles
// Listed below are a few articles of interest that may help you complete this Kata:

// Stack Overflow - What are getters and setters in ES6?
// getter - Javascript | MDN

// class Cuboid {
//   // TODO: Program Me
// }
// class Cube extends Cuboid {
//   // Don't forget to make a call to super ;)
// }

// ==============
// Solution 1
// ==============

class Cuboid {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }

  get surfaceArea() {
    return 2 * (this.length*this.width + this.width*this.height + this.height*this.length)
  }

  get volume() {
    return this.length * this.width * this.height
  }
}

class Cube extends Cuboid {
  constructor(length) {
    super(length, length, length)
  }
}

// ==============
// Tests
// ==============

describe("class Cuboid", () => {
  it("should initialize properly and have working getters", () => {
    var cuboid = new Cuboid(1, 2, 3);
    Test.assertEquals(cuboid.length, 1);
    Test.assertEquals(cuboid.width, 2);
    Test.assertEquals(cuboid.height, 3);
    Test.assertEquals(cuboid.volume, 6);
    Test.assertEquals(cuboid.surfaceArea, 22);
    cuboid.length = 4;
    Test.assertEquals(cuboid.volume, 24);
    Test.assertEquals(cuboid.surfaceArea, 52);
    cuboid.width = 5;
    Test.assertEquals(cuboid.volume, 60);
    Test.assertEquals(cuboid.surfaceArea, 94);
    cuboid.height = 6;
    Test.assertEquals(cuboid.volume, 120);
    Test.assertEquals(cuboid.surfaceArea, 148);
    [cuboid.length, cuboid.width, cuboid.height] = [7, 8, 9];
    Test.assertEquals(cuboid.volume, 504);
    Test.assertEquals(cuboid.surfaceArea, 382);
  });
});

describe("class Cube extends Cuboid", () => {
  it("should initialize properly and have the same getters as the parent class", () => {
    var cube = new Cube(1);
    Test.assertEquals(cube.length, 1);
    Test.assertEquals(cube.width, 1);
    Test.assertEquals(cube.height, 1);
    Test.assertEquals(cube.volume, 1);
    Test.assertEquals(cube.surfaceArea, 6);
    cube.length = cube.width = cube.height = 2;
    Test.assertEquals(cube.volume, 8);
    Test.assertEquals(cube.surfaceArea, 24);
    cube.length = cube.width = cube.height = 3;
    Test.assertEquals(cube.volume, 27);
    Test.assertEquals(cube.surfaceArea, 54);
    cube.length = cube.width = cube.height = 5;
    Test.assertEquals(cube.volume, 125);
    Test.assertEquals(cube.surfaceArea, 150);
    cube.length = cube.width = cube.height = 10;
    Test.assertEquals(cube.volume, 1000);
    Test.assertEquals(cube.surfaceArea, 600);
  });
});
