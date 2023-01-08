const prompt = require("prompt-sync")();

var name = prompt("What's your name");
alert("hello"+name+"!");

a = parseInt(prompt("Enter the first number"));
b = parseInt(prompt("Enter the second number"));

alert("The sum of two numbers is: "+ (a + b));
alert("The diff of two numbers is: "+ (a - b));