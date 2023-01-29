// const arrayOfOddNumbers = [1, 3, 5];
// arrayOfOddNumbers[100] = 199;

// console.log(arrayOfOddNumbers.length);
// console.log(arrayOfOddNumbers[50] )

// let arr1= ['a','b','c','d'];
// const arr2 = arr1

// arr1 = [];
// console.log(arr2);

// const a ={ };
// a.name of person ="sample"

// console.log(a);

// const obj = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
// };

// const x = obj;
// x.age = 10;

// console.log(x.age);
// console.log(obj.age);

const obj = {
   Id:1,  
   namesetter:function(name){  
    return  name;
   }
}
  
let result =obj.namesetter('testName');
console.log(result);

// Preventing right click
document.addEventListener ("contextmenu", (event) => {
    event.preventDefault();
    alert("Right click is disabled here");
})

// Random jokes
function randomJokes() {
    var arr = ["Joke is a joke", "HTML likes CSS", "script a story using javascript"];
    var randomJoke = arr[Math.floor(Math.random()*arr.length)];
    document.write(randomJoke);
}

// Date format
function generateDate() {
    var dd = new Date().getDate();
    var mm = new Date().getMonth()+1;
    var yyyy = new Date().getFullYear();
    document.write(dd +"-"+ mm +"-"+yyyy )
}
generateDate();
