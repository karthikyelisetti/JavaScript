var gettext = document.getElementById("search-btn");
gettext.addEventListener("click", getUserDetails);

function getUserDetails() {
  var userName = document.getElementById("search-text").value;
  fetch(`https://api.github.com/users/${userName}`)
    .then((res) => res.json())
    .then((data) => {
      let x = "";
      var main = document.getElementById("main");
      x += `<div class="col-md-4 justify-content-right"><img src=${data.avatar_url} id="profile-img" /></div>`;
      x += `<div class="col-md-4">
              <p id="user-name">${data.name}</p>
              <p id="user-data">
                <ul id="details">
                  <li>12 Followers </li>
                  <li>24 Following </li>
                  <li>${data.public_repos} Repos</li>
                </ul>
              </p>
              <p id="user-repo">
                <ul>
                  <li></li>
                </ul>
              </p>
            </div>`;
      main.innerHTML = x;
    });
}
