function test() {
  console.log('test');
}
console.log(test.name);

// ------------------------------------------------------------

function getFirstArg() {
  console.log(arguments[0]);
}

getFirstArg(1, 2, 3);

// ------------------------------------------------------------

function getAge(age = 30) {
  console.log(age);
}

getAge();

// ------------------------------------------------------------

// function expression vs function declaration

console.log(sum1(1, 2));
console.log(sum2(1, 2));

function sum1(a, b) {
  return a + b;
}

const sum2 = function(a, b) {
  return a + b;
};

// ------------------------------------------------------------

// arrow functions and this

const obj = {
  name: "John",
  age: 30,
  city: "New York",
  print: function() {
    console.log(this);
  },
  printArrow: () => {
    console.log(this);
  }
};

obj.print();
obj.printArrow();

// ------------------------------------------------------------

// higher order functions

function add(a) {
  return function(b) {
    return a + b;
  }
}

const addFive = add(5);
const addTen = add(10);

console.log(addFive(10));
console.log(addTen(10));
