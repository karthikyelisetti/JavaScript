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
          y += `<a class="btn btn-primary" href="${data[i].html_url}" target="_blank" role="button">${data[i].name}</a>`;
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
      x += `<div class="card text-bg-dark mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="${data.avatar_url}" class="img-fluid rounded-start" id="profile-img" alt="${data.name}">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">${data.name}</h5>
                    <p class="card-text">
                      <div class="row" id="details">
                        <div class="col-sm">${data.followers} Followers</div>
                        <div class="col-sm">${data.following} Following</div>
                        <div class="col-sm">${data.public_repos} Repos</div>
                      </div>
                    </p>
                    <p class="card-text" id="user-repo"></p>
                  </div>
                </div>
              </div>
            </div>`;
      main.innerHTML = x;
    });

    getUserRepos(userName);
}
