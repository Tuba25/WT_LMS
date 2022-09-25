const USER_NAME = "tasnuva";
const USER_PASSWORD = "1234";

const form = document.getElementById("loginForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  console.log({ username, password });

  if (username === USER_NAME && password === USER_PASSWORD) {
    window.location.href = "studentBookSearch.html";
  }
});
