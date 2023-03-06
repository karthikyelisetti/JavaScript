var gettext = document.getElementById("search-btn");
gettext.addEventListener("click", getUserDetails);

function getUserRepos(username) {
  let counter = 0;
  fetch(`https://api.github.com/users/${username}/repos`)
    .then((res) => res.json())
    .then((data) => {
      let y = "";
      var userRepo = document.getElementById("user-repo");
      for(var i=0; i < data.length; i++) {
        counter += 1;
        if(counter <= 5){
          y += `<li><a class="btn btn-primary" href="${data[i].html_url}" target="_blank" role="button">${data[i].name}</a><li>`;
        }else {
          break;
        }
          
      }

      userRepo.innerHTML = y;
    });
}

function getUserDetails() {
  var userName = document.getElementById("search-text").value;
  fetch(`https://api.github.com/users/${userName}`)
    .then((res) => res.json())
    .then((data) => {
      let x = "";
      var main = document.getElementById("main");
      x += `<div class="col-md-4 justify-content-right"><img src=${data.avatar_url} id="profile-img" /></div>`;
      x += `<div class="col-md-6">
              <p id="user-name">${data.name}</p>
              <div class="container text-center">
                <div class="row" id="details">
                  <div class="col-sm">${data.followers} Followers</div>
                  <div class="col-sm">${data.following} Following</div>
                  <div class="col-sm">${data.public_repos} Repos</div>
                </div>
              </div>
              
              <p>
                <ul id="user-repo"></ul>
              </p>
            </div>`;
      main.innerHTML = x;
    });

    getUserRepos(userName);
}
