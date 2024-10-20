var loggedin = window.localStorage.getItem("loggedin");
var name = localStorage.getItem("name");

if (loggedin !== "true" && name !== "") {
  $(document).ready(function () {
    $("#myModal").modal("show");
  });
} else {
  document.querySelector("#username").innerHTML = name;
}

document.querySelector("#mybtn").addEventListener("click", (e) => {
  e.preventDefault();
  const inputValue = document.querySelector("#myinput").value;
  if (inputValue !== "") {
    localStorage.setItem("name", inputValue);
  }
  console.log(inputValue);
});
