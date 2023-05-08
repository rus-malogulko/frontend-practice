function exampleFunction() {
  console.log(a);
  console.log(b);
  console.log(c);

  var a = 1;
  let b = 2;
  const c = 3;
}

exampleFunction();

// ------------------------------------------------------------

var a = 1;
let b = 2;
const c = 3;

if (true) {
  var a = 4;
  let b = 5;
  const c = 6;

  console.log(a);
  console.log(b);
  console.log(c);
}

console.log(a);
console.log(b);
console.log(c);

// ------------------------------------------------------------

function createFunctions() {
  var functions = [];

  for (var i = 0; i < 3; i++) {
    functions.push(() => i);
  }

  return functions;
}

const funcsVar = createFunctions();

funcsVar.forEach((func) => console.log("var: " + func()));

function createFunctionsLet() {
  let functions = [];

  for (let j = 0; j < 3; j++) {
    functions.push(() => j);
  }

  return functions;
}

const funcsLet = createFunctionsLet();

funcsLet.forEach((func) => console.log("let: " + func()));
