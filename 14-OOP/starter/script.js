'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // //Never do this in a constructor function
  // this.calcAge = function() {
  //     console.log(2037 - this.birthYear);
  // };
};

const sean = new Person('Sean', 1974);
const rika = new Person('Rika', 1979);

console.log(sean);
console.log(sean instanceof Person);

//Prototypes
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

sean.calcAge();
rika.calcAge();

console.log(sean.__proto__);

console.log(Person.prototype.isPrototypeOf(sean)); //true
console.log(Person.prototype.isPrototypeOf(Person)); //false

Person.prototype.species = 'Homo Sapiens';
console.log(sean.species, rika.species);

console.log(sean.hasOwnProperty('firstName')); //Check object's properties
console.log(sean.hasOwnProperty('species'));

console.log(sean.__proto__.__proto__);

const array = [];
console.log(array.__proto__);

// Coding Challenge #1
// Your tasks:
// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
// 'speed' property. The 'speed' property is the current speed of the car in
// km/h
// 2. Implement an 'accelerate' method that will increase the car's speed by 10,
// and log the new speed to the console
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log
// the new speed to the console
// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
// 'brake' multiple times on each of them
// Test data:
// § Data car 1: 'BMW' going at 120 km/h
// § Data car 2: 'Mercedes' going at 95 km/h
// GOOD LUCK 😀

// const Car = function(make, speed) {
//     this.make = make;
//     this.speed = speed;

// };

// Car.prototype.accelerate = function() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed}km/h`);
// };

// Car.prototype.brake = function() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed}km/h`);
// };

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);

// //bmw.accelerate();
// bmw.brake();
// //mercedes.brake();
// mercedes.accelerate();



//******ES6 Classes******

//class expression
// const PersonCl = class {};

// class declaration
class PersonCl {
  constructor(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
  };
  // Methods will be added to the .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet(){
    console.log(`Hey ${this.firstName}!`);
  }
};

const george = new PersonCl('George', 1925);

console.log(george);
george.calcAge();
george.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

