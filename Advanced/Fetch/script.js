var gettext = document.getElementById("get-text");
gettext.addEventListener("click", getText);

var getjson = document.getElementById("get-json");
getjson.addEventListener("click", getJSON);

function getText() {
    fetch("file.txt")
    .then(res => res.text())
      .then(data => {
        console.log(data);
        // document.getElementById("empty").innerHTML = data;
    })
    .catch(err => console.log(err));
}

function getJSON() {
    fetch("file.json")
    .then(res => JSON.parse(res))
      .then(data => {
        console.log(data);
        // document.getElementById("empty").innerHTML = data;
    })
    .catch(err => console.log(err));
}