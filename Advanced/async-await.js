async function anyFunction() {
//   return Promise.resolve(5);
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("I am resolved")
    }, 2000);
  });

  const anyVar = await p;
  console.log(anyVar);
}
// anyFunction();


// anyFunction()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
