// returns a promise
let PromiseValue = new Promise(function (resolve, reject) {

    resolve("Promise resolved");
  
  });

  PromiseValue

  .then(function successValue(result) {

    console.log(result);

  })

  .then(function successValue1() {

    console.log("You can call multiple functions this way.");

  });