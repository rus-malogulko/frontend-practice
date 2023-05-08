// Closures and lexical environment

let name = "John";
function sayHi() {
  console.log("Hi, " + name);
}
name = "Pete";

sayHi(); // what will it show: "John" or "Pete"?

// ------------------------------------------------------------

function makeWorker() {
  let name = "Pete";

  return function() {
    return function() {
      return function() {
        console.log(name);
      }
    }
  };
}
const name = "John";
const nameGetter = makeWorker()()();

nameGetter(); // what will it show?
//
// ------------------------------------------------------------

function counter() {
  let count = 0;

  return function() {
    return count++;
  };
}

const counter1 = counter();
console.log(counter1()); // what will it show?

how to get access to count variable?
console.log(counter1.count); // undefined

// ------------------------------------------------------------

function counter() {
  let count = 0;

  return function() {
    return count++;
  };
}

const counter1 = counter();
const counter2 = counter();
const counter3 = counter();

console.log(counter1());
console.log(counter2());
console.log(counter3());

let counter1Value = counter1();
counter1Value = 10;
console.log(counter1()); // what will it show?

// ------------------------------------------------------------

let name = "John";
if (true) {
  let name = "Pete";
  console.log(name); // what will it show?
}
console.log(name); // what will it show?

// ------------------------------------------------------------

for (let i = 0; i < 10; i++) {
  console.log(i); // what will it show?
}
console.log(i); // what will it show?

// ------------------------------------------------------------

let name = "Pete";
{
  console.log(name); // what will it show?
  // let name = "John";
  // console.log(name); // what will it show?
}
console.log(name); // what will it show?

// ------------------------------------------------------------

let name = "Pete";
(function() {
  console.log(name); // what will it show?
  let name = "John";
  console.log(name); // what will it show?
})();
console.log(name); // what will it show?

// ------------------------------------------------------------

function makeWorker() {
  let name = "Pete";
  console.log(name); // what will it show?
}();

// ------------------------------------------------------------

+function() {
  let name = "Pete";
  console.log(name); // what will it show?
}();
