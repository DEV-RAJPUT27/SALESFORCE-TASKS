function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  if (name == "" || email == "") {
    alert("Please fill out all fields.");
    return false;
  }
  alert("Thank you for contacting me!");
  return true;
}
