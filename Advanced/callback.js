const add = (a, b) => {
  let sum = a + b;
  console.log(sum);
  return sum;
};

const mul = (a, b) => {
  let mul = a * b;
  console.log(mul);
  return mul;
};

const sub = (a, b) => {
  let sub = a - b;
  console.log(sub);
  return sub;
};

const addition = (a, b, callBackFunction) => {
  callBackFunction(a, b);
};

const subtraction = (a, b, callBackFunction) => {
  setTimeout(() => {
    callBackFunction(a, b);
  }, 1500);
};

const multiplication = (a, b, callBackFunction) => {
  callBackFunction(a, b);
};

const seriesOfOperation = (a, b) => {
  addition(a, b, (a, b) => {
    console.log(a + b);
    subtraction(a, b, (a, b) => {
      console.log(a - b);
      multiplication(a, b, (a, b) => {
        console.log(a * b);
      });
    });
  });
};

// seriesOfOperation(5, 3);
// Promises
let pAddition = (arr) => {
  return new Promise((resolve, reject) => {
    let a = arr[0];
    let b = arr[1];
    if (a < 2 || b < 3) {
      reject("Pass only non negative numbers");
    } else {
      let sum = a + b;
      console.log("Sum is ", sum);
      resolve(arr);
    }
  });
};

// pAddition([1, 10])
// .then(result => console.log(result))
// .catch(error => console.log(error))

// addition(1, 3, add);
// subtraction(11, 3, sub);
// multiplication(14, 32, mul);

let pSubstraction = (arr) => {
  return new Promise((resolve, reject) => {
    let a = arr[0];
    let b = arr[1];
    if (a < 0 || b < 0) {
      reject("Pass only non negative numbers and a should be greater than b");
    } else if(a < b) {
      reject("a should be greater than b");
    } else {
      let diff = a - b;
      console.log("Difference is ", diff);
      resolve(arr);
    }
  });
};

// pSubstraction([9, 10])
// .then(result => console.log(result))
// .catch(error => console.log(error))

const newPromise1 = new Promise((resolve, reject) => {
  
  setTimeout(()=>{
      resolve("resolved")
  },2000)
//   resolve("resolved");
});
const newPromise2 = Promise.resolve(100);
Promise.any([newPromise2, newPromise1]).then((result) => {
  console.log(result);
});

const newPromise3 = new Promise((resolve, reject) => {
  setTimeout(()=>{
      resolve("resolved")
  },2000)
//   resolve("resolved");
});
const newPromise4 = Promise.resolve(100);
const newPromise5 = Promise.reject("rejected");
Promise.allSettled([newPromise1, newPromise2, newPromise3])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

//Your function must always return a promise
// If data is not a number, return a promise rejected instantly and give the data "error" (in a string)
// If data is an odd number, return a promise resolved 1 second later and give the data "odd" (in a string)
// If data is an even number, return a promise rejected 2 seconds later and give the data "even" (in a string)

const evenOddPromise = (a) => {
  return new Promise((resolve, reject) => {
    if (typeof a === "string") {
      reject('Error data "string" (in a string)');
    }
    if (a % 2 === 0) {
      setTimeout(() => {
        reject('Error data "even" (in a string)');
      }, 2000);
    } else {
      setTimeout(() => {
        resolve(" Success odd (in a string)");
      }, 1000);
    }
  });
};

// evenOddPromise(3)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));