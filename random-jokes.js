// Random jokes
function randomJokes() {
  var arr = [
    "Joke is a joke",
    "HTML likes CSS",
    "script a story using javascript",
  ];
  var randomJoke = arr[Math.floor(Math.random() * arr.length)];
  console.log(randomJoke);
}
randomJokes();