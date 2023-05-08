// while loop

let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// ------------------------------------------------------------

// do while loop

let j = 0;
do {
  console.log(j);
  j++;
} while (j < 10);

// ------------------------------------------------------------

// for loop

for (let k = 0; k < 10; k++) {
  console.log(k);
}

// ------------------------------------------------------------

// for in loop

const obj1 = {
  name: "John",
  age: 30,
  city: "New York"
};

for (let key in obj1) {
  console.log(key);
}

// ------------------------------------------------------------

// for of loop

const arr1 = [1, 2, 3, 4, 5];

for (let value of arr1) {
  console.log(value);
}

// ------------------------------------------------------------

// for of loop with string

const str1 = "Hello";

for (let value of str1) {
  console.log(value);
}

// ------------------------------------------------------------

// for of loop with array of objects

const arr2 = [
  {
    name: "John",
    age: 30,
    city: "New York"
  },
  {
    name: "Pete",
    age: 40,
    city: "Chicago"
  },
];

for (let value of arr2) {
  console.log(value);
}

// ------------------------------------------------------------

// break vs continue

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

// ------------------------------------------------------------

// break vs continue with labels

outer: for (let i = 0; i < 10; i++) {
  inner: for (let j = 0; j < 10; j++) {
    if (j === 5) {
      break inner;
    }
    console.log(i, j);
  }
}

outer: for (let i = 0; i < 10; i++) {
  inner: for (let j = 0; j < 10; j++) {
    if (j === 5) {
      break outer;
    }
    console.log(i, j);
  }
}
