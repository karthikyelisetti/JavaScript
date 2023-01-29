// Date format
function generateDate() {
  var dd = new Date().getDate();
  var mm = new Date().getMonth() + 1;
  var yyyy = new Date().getFullYear();
  document.write(dd + "-" + mm + "-" + yyyy);
}
generateDate();
