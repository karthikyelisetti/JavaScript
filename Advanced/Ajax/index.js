function load() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if(this.readyState == 1) {
      console.log("read-state 1", this.responseText);
    }
    if(this.readyState == 2) {
      console.log("read-state 2", this.responseText);
    }
    if(this.readyState == 3) {
      console.log("read-state 3", this.responseText.length);
    }
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("data").innerHTML = this.responseText;

      const xmlArr = JSON.parse(this.responseText);
      var firstTwenty = xmlArr.slice(0, 20);
      console.log(firstTwenty);
      firstTwenty.forEach((object) => {
        console.log(object.login);
      });
    }
  };
  xhttp.open("GET", "https://api.github.com/users", true);
  xhttp.send();
}
