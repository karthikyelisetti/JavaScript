var gettext = document.getElementById("search-btn");
gettext.addEventListener("click", getUserDetails);

function getUserDetails() {
    var userName = document.getElementById("search").value;
    // console.log(userName);
    fetch(`https://api.github.com/users/${userName}`)
      .then((res) => res.json())
      .then((data) => {
        let x = "";
        var main = document.getElementById("main");
        x += `<div><img src=${data.avatar_url} /></div>`;
        main.innerHTML = x;
      });
  }