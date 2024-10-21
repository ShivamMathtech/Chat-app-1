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

let regbtn = document
  .querySelector(".registerbtn")
  .addEventListener("click", (e) => {
    document.querySelector("#staticBackdrop").classList.remove("loginform");
    e.preventDefault();
    const ele = document.querySelector("#staticBackdrop .myform");
    ele.innerHTML = `
                   <label for="name">Name</label>
                   <input type="text" class="form-control myinput" id ="fname">
                   <label for="email">Email</label>
                   <input type="email" class="form-control myinput" id ="email">
                   <label for="password">Password</label>
                   <input type="password" class="form-control myinput" id="password">
                   <label for="cpassword" >Confirm Password</label>
                   <input type="password" class="form-control myinput" id="cpassword">
                   <button type="submit" class="btn btn-primary mybtn mt-2">Signup</button>
                   `;
    document
      .querySelector("#staticBackdrop ")
      .classList.add("registrationform");

    $(document).ready(function () {
      $("#staticBackdrop").modal("show");
    });
    document
      .querySelector(".registrationform")
      .addEventListener("submit", (e) => {
        e.preventDefault();
        console.log("Registration form submitted");
      });
  });

let lgnbtn = document
  .querySelector(".loginbtn")
  .addEventListener("click", () => {
    document
      .querySelector("#staticBackdrop")
      .classList.remove("registrationform");
    document.querySelector(".modal-title").textContent = "login form";
    const ele = document.querySelector("#staticBackdrop .myform");
    ele.innerHTML = `
                   <label for="name">Name</label>
                   <input type="text" class="form-control myinput" id="fname">
                   <label for="password">Password</label>
                   <input type="password" class="form-control myinput" id="password">
                   <button type="submit" class="btn btn-primary mybtn mt-2">Login</button>
                   `;

    document.querySelector("#staticBackdrop").classList.add("loginform");

    $(document).ready(function () {
      $("#staticBackdrop").modal("show");
    });
    document.querySelector(".loginform").addEventListener("submit", (e) => {
      e.preventDefault();

      let d = {
        fname: document.getElementById("fname").value,
        password: document.getElementById("password").value,
      };

      fetch("http://localhost:5000/auth/login", {
        method: "POST",
        body: JSON.stringify(d),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error("Error:", error));
    });
  });
