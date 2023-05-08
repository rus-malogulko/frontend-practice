const getIndex = () => {
  console.log('getIndex() called');
  return 3;
};
const getResult = () => {
  console.log('getResult() called');
  return 2;
}
const getArray = () => {
  console.log('getArray() called');
  return [1, 2, 3, 4, 5];
}

// evaluation order example
console.log(getArray()[getIndex()] + getResult());

// ------------------------------------------------------------

// Person object structure
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  city: "San Francisco",
  country: "USA",
};

// Function to format person information
function formatPersonInfo(person) {
  // Destructure the person object
  const { firstName, lastName, age, city, country } = person;

  // Use template literals to create a formatted string
  const formattedInfo = `
    ===================================
    ${firstName} ${lastName}
    is ${age} years old
    and lives in ${city}, ${country}.
    ===================================
  `;

  return formattedInfo;
}

// Test the function
const personInfo = formatPersonInfo(person);
console.log(personInfo);

// ------------------------------------------------------------

const price = 19.99;
const taxRate = 0.07;
const total = price * (1 + taxRate);

const formattedTotal = `The total price, including tax, is $${total.toFixed(2)}.`;

console.log(formattedTotal);

// ------------------------------------------------------------

// explicit coercion
const num = 5;
const str = String(num);
console.log(str);
console.log(typeof str);

// implicit coercion
const num2 = 5;
const str2 = num2 + "";
console.log(str2);
console.log(typeof str2);

// ------------------------------------------------------------

const num3 = 5;
const str3 = "5";
console.log(num3 === str3);

const num4 = 5;
const str4 = "5";
console.log(num4 == str4);

// ------------------------------------------------------------

const a = true;
const b = false;
const c = true;

console.log(a && b);
console.log(a || b);
console.log(!a);

// ------------------------------------------------------------

const func1 = () => {
  console.log("func1 called");
  return true;
}

const func2 = () => {
  console.log("func2 called");
  return false;
}

const func3 = () => {
  console.log("func3 called");
  return true;
}

console.log(func1() && func2() && func3());
console.log(func1() || func2() || func3());
console.log(func1() && func3() && func2());

// ------------------------------------------------------------

const a = 10;
const b = 2;

console.log(a ** b);

// ------------------------------------------------------------

const a = 10;
const b = 4;

console.log(a % b);
