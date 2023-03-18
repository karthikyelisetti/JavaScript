// for (var id = 0; id < 3; id++) {
//   setTimeout(function () {
//     console.log("seconds: " + id);
//   }, id * 1000);
// }

// for (let id = 0; id < 3; id++) {
//   setTimeout(function () {
//     console.log("seconds: " + id);
//   }, id * 1000);
// }

// Immediately invoked function expressions
for (var id = 1; id <= 3; id++) {
  (function (id) {
    setTimeout(function () {
      console.log("seconds: " + id);
    }, id * 1000);
  })(id);
}
