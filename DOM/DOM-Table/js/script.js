const generateTable = () => {
  let rn = parseInt(prompt("Enter number of rows"));
  let cn = parseInt(prompt("Enter number of columns"));

  for (var r = 0; r < rn; r++) {
    console.log(document.getElementById("my-table"));
    var x = document.getElementById("my-table").insertRow(r);
    for (var c = 0; c < cn; c++) {
      var y = x.insertCell(c);
      y.innerHTML = "row" + r + "column" + c;
    }
  }
}
