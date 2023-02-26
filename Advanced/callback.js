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

seriesOfOperation(5, 3);

// addition(1, 3, add);
// subtraction(11, 3, sub);
// multiplication(14, 32, mul);
