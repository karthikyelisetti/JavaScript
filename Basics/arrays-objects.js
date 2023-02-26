var arr1 = [1, 3, 4, 5, 67, 89];
console.log(arr1[0]); //1
console.log(arr1[3]); //
console.log(arr1[arr1.length - 1]);
var arr2 = new Array(45, 67, 89, 90);
console.log(arr2);
console.log(typeof arr2);
for (var i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}
console.log("*********************");
for (var i in arr2) {
  console.log(arr2[i]);
}

//adding values
arr1.push(100);
arr1.unshift(200);
// for (var i of arr2){
//     console.log(i)
// }
console.log(arr1);
arr1.pop();
arr1.shift();
console.log("*******************");
console.log(arr1);
arr1.splice(0, 2);
console.log(arr1);
arr1.splice(3, 0, 1000, 2000);
console.log(arr1);
