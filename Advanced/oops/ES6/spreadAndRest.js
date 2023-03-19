// // ... operators

// //Rest operator
// const sum = (...args) => {
//   //
//   let total = 0;
//   args.forEach((ele) => {
//     total += ele;
//   });
//   return total;
// };

// console.log(sum(1, "-2"));
// console.log(sum(1, 2));
// console.log(sum(1, 21, 3));
// console.log(sum(1, 21, 3, 6, 8, -9));

//Spread
// const arrayEx = [21, -65];
// const sumSpread = (a, b) => {
//   return a + b;
// };
// console.log(sumSpread.apply(null, arrayEx));
// console.log(sumSpread(...arrayEx));
//console.log(sumSpread(1, 2));

// let arr = [1, 3, 5, 7];

// let e = arr[0];
// let f = arr[arr.length-1];

// array destructuring
// var [x, ...y] = arr;
// console.log(x);
// console.log(y);

// object destructing
// let obj = {
//   a: 10,
//   b: 30,
//   c: 40,
//   d: 60
// }

// let {a, ...b} = obj;
// console.log(a);
// console.log(b);

//Hoisting?
//call(), bind(), apply()?

//bind()
// const a = {
//   first: 21,
//   math: function() {
//     return this.first;
//   },
// };

// test = a.math;
// var newVar = test.bind(a);
// console.log(newVar());

// // apply()
// var value = [1, 2, 3, 4, 5, 91];
// // console.log(Math.max(value));
// console.log(Math.max.apply(null,value)); 
// //split the array and give the values to you. not used in ES6 equivalent to spread

//call()
const a = (first, second) => {
  this.first = first;
  this.second = second;
};

const b = (first, second) => {
  a.call(this, first, second);
  this.c = 34;
};

const newObj = new b(29, 26);
console.log(newObj.first);
