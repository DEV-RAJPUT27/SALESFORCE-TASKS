function validateRSVP() {
  var name = document.getElementById("rsvp-name").value;
  var email = document.getElementById("rsvp-email").value;
  var answer = document.getElementById("rsvp-answer").value;

  if (name === "" || email === "" || answer === "") {
    alert("Please fill out all RSVP fields.");
    return false;
  }

  alert("Thank you, " + name + "! We have received your RSVP.");
  return true;
}
