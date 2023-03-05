var gettext = document.getElementById("get-text");
gettext.addEventListener("click", getText);

var getjson = document.getElementById("get-json");
getjson.addEventListener("click", getJSON);

function getText() {
  document.getElementById("empty").innerHTML = "</br></br>";
  fetch("file.txt")
    .then((res) => res.text())
    .then((data) => {
      // console.log(data);
      document.getElementById("empty").innerHTML = data;
    })
    .catch((err) => console.log(err));
}

function getJSON() {
  document.getElementById("empty").innerHTML = "</br></br>";
  fetch("file.json")
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);
      let x = "";
      data.forEach((object) => {
        // console.log(object.body);
        x += `<li>${object.body}</li>`;
      });
      document.getElementById("empty").innerHTML = x;
    })
    .catch((err) => console.log(err));
}

function getAPI() {
  document.getElementById("empty").innerHTML = "</br></br>";
  fetch("https://api.github.com/users")
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);
      let x = "";
      data.forEach((user) => {
        x += `<li>${user.login}</li>`;
      });
      document.getElementById("empty").innerHTML = x;
    });
}
