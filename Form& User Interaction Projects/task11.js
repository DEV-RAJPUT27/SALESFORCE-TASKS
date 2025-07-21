function validateLogin() {
  var email = document.getElementById("login-email").value;
  var password = document.getElementById("login-password").value;

  if (email === "" || password === "") {
    alert("Please fill out all login fields.");
    return false;
  }
  alert("Login Successful!");
  return true;
}

function validateSignup() {
  var name = document.getElementById("signup-name").value;
  var email = document.getElementById("signup-email").value;
  var password = document.getElementById("signup-password").value;
  var confirm = document.getElementById("signup-confirm").value;

  if (name === "" || email === "" || password === "" || confirm === "") {
    alert("Please fill out all signup fields.");
    return false;
  }

  if (password !== confirm) {
    alert("Passwords do not match.");
    return false;
  }

  alert("Signup Successful!");
  return true;
}
