function load() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("data").innerHTML = this.responseText;

      const xmlArr = JSON.parse(this.responseText);
      var firstTwenty = xmlArr.slice(0, 20);
      console.log(firstTwenty);
      firstTwenty.forEach((object, index) => {
        console.log(object.login);
      });
    }
  };
  xhttp.open("GET", "https://api.github.com/users", true);
  xhttp.send();
}
