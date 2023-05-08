const array3 = [1, 2, 3, 4, 5];
const array4 = [];
for (let i = 0; i < array3.length; i++) {
  array4.push(array3[i] * 2);
}
console.log(array4);

// ------------------------------------------------------------

const array1 = [1, 2, 3, 4, 5];

const array2 = array1.map((item) => item * 2);
console.log(array2);

// ------------------------------------------------------------

const array5 = [1, 2, 3, 4, 5];
const array6 = array5.filter((item) => item % 2 === 0);
console.log(array6);

// ------------------------------------------------------------

const array7 = [1, 2, 3, 4, 5];
const array8 = array7.reduce((acc, item) => acc + item, 0);
console.log(array8);

// ------------------------------------------------------------

const array9 = [1, 2, 3, 4, 5];
const array10 = array9.reduce((acc, item) => {
  if (item % 2 === 0) {
    acc[item] = item;
  }
  return acc;
}, {});

console.log(array10);

// ------------------------------------------------------------

// new Array vs [] vs Array.of vs Array.from
const array11 = new Array(5);
console.log(array11);

const array12 = [];
console.log(array12);

const array13 = Array.of(5);
console.log(array13);

const array14 = new Array(5).fill(1);
console.log(array14);

const array15 = Array.from([5,4,3,2,1]);
console.log(array15);

const array16 = Array.from({ length: 5 });
console.log(array16);

const array17 = Array.from({ length: 5 }, () => 1);
console.log(array17);

const array18 = Array.from({ length: 5 }, (item, index) => index);
console.log(array18);

// ------------------------------------------------------------

// slice vs splice
const array19 = [1, 2, 3, 4, 5];
const array20 = array19.slice(1, 3);
console.log(array19);
console.log(array20);

const array21 = [1, 2, 3, 4, 5];
const array22 = array21.splice(1, 3);
console.log(array21);
console.log(array22);

// ------------------------------------------------------------
// delete vs splice

const array23 = [1, 2, 3, 4, 5];
delete array23[1];
console.log(array23);

const array24 = [1, 2, 3, 4, 5];
array24.splice(1, 1);
console.log(array24);
