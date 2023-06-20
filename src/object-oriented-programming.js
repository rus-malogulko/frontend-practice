// Principles of object-oriented programming:

// 1. Encapsulation
// 2. Inheritance
// 3. Polymorphism
// 4. Abstraction

// 1. Encapsulation
// -----------------

// Encapsulation means that we group related variables and functions together.

// const person = {
//   name: 'John',
//   age: 30,
//   greet() {
//     console.log(`Hello, my name is ${this.name}`);
//   },
// };

// person.greet();

// 2. Inheritance
// --------------

// Inheritance means that we can create new classes based on other classes.

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// }

// class Student extends Person {
//   constructor(name, age, grade) {
//     super(name, age);
//     this.grade = grade;
//   }

//   study() {
//     console.log(`I'm studying`);
//   }
// }

// const student = new Student('John', 30, 5);

// student.greet();
// student.study();

// 3. Polymorphism
// ----------------

// Polymorphism means that we can use the same method on different objects and each of them can behave in a different way.
// Polymorphism is achieved by using inheritance.

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// }

// class Student extends Person {
//   constructor(name, age, grade) {
//     super(name, age);
//     this.grade = grade;
//   }

//   study() {
//     console.log(`I'm studying`);
//   }

//   greet() {
//     console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`);
//   }
// }

// const person = new Person('John', 30);
// const student = new Student('John', 30, 5);

// person.greet();

// student.greet();
// student.study();

// 4. Abstraction
// ---------------

// Abstraction means that we hide the complexity of our code and only show the essential parts to the user.

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// }

// class Student extends Person {
//   constructor(name, age, grade) {
//     super(name, age);
//     this.grade = grade;
//   }

//   study() {
//     console.log(`I'm studying`);
//   }

//   greet() {
//     console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`);
//   }
// }

// const person = new Person('John', 30);
// const student = new Student('John', 30, 5);

// person.greet();

// student.greet();

