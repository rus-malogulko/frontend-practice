// object creation

const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  city: "San Francisco",
  country: "USA",
};

const person2 = new Object();
person2.firstName = "John";
person2.lastName = "Doe";
person2.age = 30;
person2.city = "San Francisco";
person2.country = "USA";

const person3 = Object.create(Object.prototype, {
  firstName: {
    value: "John",
    enumerable: true,
    writable: true,
    configurable: true,
  },
  lastName: {
    value: "Doe",
    enumerable: true,
    writable: true,
    configurable: true,
  },
  age: {
    value: 30,
    enumerable: true,
    writable: true,
    configurable: true,
  },
  city: {
    value: "San Francisco",
    enumerable: true,
    writable: true,
    configurable: true,
  },
  country: {
    value: "USA",
    enumerable: true,
    writable: true,
    configurable: true,
  },
});

function Person(firstName, lastName, age, city, country) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.city = city;
  this.country = country;
}

const person4 = new Person("John", "Doe", 30, "San Francisco", "USA");


console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);

//------------------------------------------------------------

// object seal vs freeze

const person5 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  city: "San Francisco",
  country: "USA",
}

const person6 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  city: "San Francisco",
  country: "USA",
}

Object.seal(person5);
Object.freeze(person6);

person5.age = 40;
person5.city = "Chicago";
person5.codeStamp = 12345;

console.log(person5);

person6.age = 40;
person6.city = "Chicago";
person6.country = "Canada";
person5.codeStamp = 12345;

console.log(person6);

//------------------------------------------------------------

// deep vs shallow copy

const person7 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  city: "San Francisco",
  country: "USA",
  hobbies: ["reading", "music", "movies"],
};

const person8 = Object.assign({}, person7);

person8.firstName = "Jane";
person8.lastName = "Doe";
person8.age = 25;
person8.city = "New York";
person8.country = "USA";
person8.hobbies.push("sports");

console.log(person7);
console.log(person8);

//------------------------------------------------------------

// object destructuring

const person9 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  city: "San Francisco",
  country: "USA",
  hobbies: ["reading", "music", "movies"],
};

const firstName = person9.firstName;
const lastName = person9.lastName;
const age = person9.age;
const city = person9.city;
const country = person9.country;
const hobbies = person9.hobbies;

// const { firstName, lastName, age, city, country, hobbies } = person9;

//------------------------------------------------------------

// object destructuring with nested objects

const person10 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  city: "San Francisco",
  country: "USA",
  hobbies: ["reading", "music", "movies"],
  address: {
    street: "123 Main St",
    city: "San Francisco",
    state: "CA",
    zip: "94101",
  },
};

const { firstName, lastName, age, city, country, hobbies, address } = person10;

const { street, city, state, zip } = address;

//------------------------------------------------------------

// deep copy

const person11 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  city: "San Francisco",
  country: "USA",
  hobbies: ["reading", "music", "movies"],
  address: {
    street: "123 Main St",
    city: "San Francisco",
    state: "CA",
    zip: "94101",
  },
};

const person12 = JSON.parse(JSON.stringify(person11));

person12.firstName = "Jane";
person12.lastName = "Doe";
person12.age = 25;
person12.city = "New York";
person12.country = "USA";
person12.hobbies.push("sports");

console.log(person11);
console.log(person12);

//------------------------------------------------------------

// object destructuring with default values

const person13 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  city: "San Francisco",
  country: "USA",
  hobbies: ["reading", "music", "movies"],
};

const { firstName, lastName, age, city, country, hobbies, address = {} } = person13;

const { street, city, state, zip } = address;

//------------------------------------------------------------

// object destructuring with renaming

const person14 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  city: "San Francisco",
  country: "USA",
  hobbies: ["reading", "music", "movies"],
};

const { firstName: fName, lastName: lName, age, city, country, hobbies } = person14;

console.log(fName);
console.log(lName);
console.log(age);
console.log(city);

//------------------------------------------------------------

// object destructuring with rest operator

const person15 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  city: "San Francisco",
  country: "USA",
  hobbies: ["reading", "music", "movies"],
};

const { firstName, lastName, ...rest } = person15;

console.log(firstName);
console.log(lastName);
console.log(rest);

//------------------------------------------------------------

// object destructuring with spread operator

const person16 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  city: "San Francisco",
  country: "USA",
  hobbies: ["reading", "music", "movies"],
};

const person17 = {
  ...person16,
  firstName: "Jane",
  lastName: "Doe",
  age: 25,
  city: "New York",
  country: "USA",
  hobbies: [...person16.hobbies, "sports"],
};

console.log(person16);
console.log(person17);

//------------------------------------------------------------

// hasOwnProperty

const person18 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  city: "San Francisco",
  country: "USA",
  hobbies: ["reading", "music", "movies"],
};

console.log(person18.hasOwnProperty("firstName"));
console.log(person18.hasOwnProperty("hobbies"));
console.log(person18.hasOwnProperty("address"));
console.log(person18.hasOwnProperty("street"));
console.log(person18.hasOwnProperty("zip"));

//------------------------------------------------------------

// ways to copy an object

const person19 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  city: "San Francisco",
  country: "USA",
  hobbies: ["reading", "music", "movies"],
};

const person20 = Object.assign({}, person19);

const person21 = { ...person19 };

const person22 = JSON.parse(JSON.stringify(person19));

//------------------------------------------------------------

// this keyword

const person23 = {
  firstName: "John",
  age: 30,
  fullName(lastName) {
    console.log(this.firstName + " " + lastName);
  },
};

person23.fullName();

const fullName = person23.fullName;
fullName();

const fullName2 = fullName.bind(person23, "Doe");
fullName2();

fullName.call(person23, "Doe");
fullName.apply(person23, ["Doe"]);