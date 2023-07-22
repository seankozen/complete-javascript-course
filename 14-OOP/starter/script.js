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

const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;

};

Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}km/h`);
};

Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

// //bmw.accelerate();
// bmw.brake();
// //mercedes.brake();
// mercedes.accelerate();



//******ES6 Classes******

//class expression
// const PersonCl = class {};

// class declaration
class PersonCl {
  constructor(fullName, birthYear){
    this.fullName = fullName;
    this.birthYear = birthYear;
  };
  // Methods will be added to the .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet(){
    console.log(`Hey ${this.firstName}!`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  //Set a property that already exists
  set fullName(name) {
    if(name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  //Static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }

};

const george = new PersonCl('George Kozen', 1925);
//const walter = new PersonCl('Walter', 1945);

console.log(george);
george.calcAge();
george.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

const account = {
  owner: 'Sean',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements. push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

console.log(george.age);

//Static methods
Person.hey = function() {
  console.log('Hey there 👋');
};

PersonCl.hey();

//Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

// Coding Challenge #2
// Your tasks:
// 1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
// by 1.6)
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
// converts it to km/h before storing the value, by multiplying the input by 1.6)
// 4. Create a new car and experiment with the 'accelerate' and 'brake'
// methods, and with the getter and setter.
// Test data:
// § Data car 1: 'Ford' going at 120 km/h
// GOOD LUCK 😀

// class CarCl {
//   constructor(make, speed ) {
//     this.make = make;
//     this.speed = speed;
//   };
//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed}km/h`);
//     }
    
//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed}km/h`);
//   }

//   get speedUS() {
//     return this.speed/1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }

// }

// Inheritance between classes (Constructor functions)
// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // Linking prototypes
// Student.prototype = Object.create(Person.prototype);


// Student.prototype.introduce = function() {
//   console.log(`My name is ${this.firstName} and I study ${this.course}.`)
// };

// Student.prototype.constructor = Student;

// const mike = new Student('Mike', 2012, 'Computer SCience');

// mike.introduce();
// mike.calcAge();
// console.dir(Student.prototype.constructor);

// Coding Challenge #3
// Your tasks:
// 1. Use a constructor function to implement an Electric Car (called 'EV') as a child
// "class" of 'Car'. Besides a make and current speed, the 'EV' also has the
// current battery charge in % ('charge' property)
// 2. Implement a 'chargeBattery' method which takes an argument
// 'chargeTo' and sets the battery charge to 'chargeTo'
// 3. Implement an 'accelerate' method that will increase the car's speed by 20,
// and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
// km/h, with a charge of 22%'
// 4. Create an electric car object and experiment with calling 'accelerate',
// 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
// you 'accelerate'! Hint: Review the definiton of polymorphism 😉
// Test data:
// § Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%
// GOOD LUCK 😀

const EV = function(make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

//Link prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function(chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.constructor = EV;

EV.prototype.accelerate = function() {
  this.speed += 20;
  this.charge--;
  console.log(`${this.make} going at ${this.speed}km/h, with a charge of ${this.charge}%.`);
};


const tesla = new EV('Tesla', 50, '70');
tesla.accelerate();
tesla.brake();
tesla.chargeBattery(100);
console.log(tesla);

console.dir(EV.prototype.constructor);

// Inheritance between Classes: ES6

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear); //Needs to happen first
    this.course = course;
  }

  introduce () {
    console.log(`My name is ${this.fullName} and I study ${this.course}.`);
  }

  calcAge() {
    console.log(`I'm ${2037 - this.birthYear} years old, but as a student I feel more like ${2037 - this.birthYear + 10}`)
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
console.log(martha);
martha.introduce();
martha.calcAge();

//Using Object.create()

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce =   function() {
  console.log(`My name is ${this.firstName} and I study ${this.course}.`);
}

const jay = Object.create(StudentProto);
jay.init('Jay', 1985, 'Computer Science');
jay.introduce();

console.log(jay);

//Encapsulation: Protected Properties and Methods
//Protected Properties and Methods

// class Account {
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this._pin = pin;
//     this._movements = []; //Add underscore to protect it (not truely private)
//     this.locale = navigator.language;

//     console.log(`Thanks for opening an account, ${owner}.`);
//   }

//   //Public interface
//   getMovements() {
//     return this._movements;
//   }



//   deposit(val) {
//     this._movements.push(val);
//   }

//   withdraw(val) {
//     this.deposit(-val);
//   }

//   _approveLoan(val) {
//     return true;
//   }

//   requestLoan(val) {
//     if(this._approveLoan(val)) {
//       this.deposit(val);
//       console.log("Loan approved!");
//     }
//   }

// }

// const acc1 = new Account('Sean', 'USD', 1234);
// acc1.deposit(1000);
// acc1.withdraw(150);
// acc1.requestLoan(1234);
// console.log(acc1.getMovements());
// console.log(acc1);

//Private class fields and methods
//1) Public fields
//2) Private fields
//3) Public methods
//4) Private methods
//There are also static versions



class Account {
  //1) Public fiels (instances)
  locale = navigator.language;
  

  //2) Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
  
    console.log(`Thanks for opening an account, ${owner}.`);
  }

  //3) Public methods
  //Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  requestLoan(val) {
    //if(this.#approveLoan(val)) {
    if(this._approveLoan(val)) {
      this.deposit(val);
      console.log("Loan approved!");
    }
  }
  //4) Private methods
  //#approveLoan(val) {
  _approveLoan(val) {
    return true;
  }


}

const acc1 = new Account('Sean', 'USD', 1234);
acc1.deposit(1000);
acc1.withdraw(150);
acc1.requestLoan(1234);
console.log(acc1);

//console.log(acc1.#movements); cannot access #movements outside class
console.log(acc1.getMovements());