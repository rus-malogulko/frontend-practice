// Functional programming

// =====================================
// Principles of functional programming:
// =====================================

// 1. Immutability
// 2. Pure functions
// 3. Declarative code

// 1 .Immutability
// ----------------

// Immutability means that once we create a value, we can't change it.

const a = 1;
a = 2; // Error

const b = [1, 2, 3];
b.push(4); // OK
b = [1, 2, 3, 4]; // Error

const c = { a: 1, b: 2 };
c.a = 3; // OK
c = { a: 3, b: 2 }; // Error

// 2. Pure functions
// -----------------

// A pure function is a function that given the same input, will always return the same output and doesn't have any side effects.

const add = (a, b) => a + b;

const add = (a, b) => {
  return a + b;
};

const add = (a, b) => {
  console.log(a + b);
};

const add = (a, b) => {
  return a + b + Math.random();
};

// Not pure function example

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = [];

const getEvenNumbers = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
  }
};

getEvenNumbers(numbers);

// 3. Declarative code
// -------------------

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((number) => number % 2 === 0);

// Imperative code example

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
  }
}

// =====================================
// Functional programming paradigms:
// =====================================

// Paradigm - a way of thinking about and solving problems

// 1. Higher-order functions
// 2. Function composition
// 3. Currying
// 4. Partial application
// 5. Memoization

// 1. Higher-order functions
// -------------------------

// A higher-order function is a function that takes a function as an argument or returns a function.

const add = (a, b) => a + b;

const higherOrderFunction = (fn) => {
  return fn(1, 2);
};

console.log(higherOrderFunction(add));

// 2. Function composition

// Function composition is the process of combining two or more functions to produce a new function.

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

const addAndMultiply = (a, b, c) => {
  return multiply(add(a, b), c);
};

console.log(addAndMultiply(1, 2, 3));

// 3. Currying

// Currying is the process of converting a function that takes multiple arguments into a function that takes them one at a time.

const add = (a, b) => a + b;

const curriedAdd = (a) => (b) => a + b;

console.log(curriedAdd(1)(2));

// 4. Partial application

// Partial application is the process of fixing a number of arguments to a function, producing another function of smaller arity.
// Arity - the number of arguments a function takes.

const add = (a, b) => a + b;

const partialAdd = (a) => (b) => add(a, b);

console.log(partialAdd(1)(2));

// 5. Memoization

// Memoization is the process of caching the result of a function so that it can be returned later without needing to be recomputed.

const memoizedAdd = () => {
  let cache = {};

  return (a, b) => {
    if (cache[`${a}+${b}`]) {
      console.log("Fetching from cache");
      return cache[`${a}+${b}`];
    } else {
      console.log("Calculating result");
      const result = a + b;
      cache[`${a}+${b}`] = result;
      return result;
    }
  };
};
