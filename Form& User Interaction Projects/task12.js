let currentStep = 1;
showStep(currentStep);

function showStep(step) {
  let steps = document.getElementsByClassName("step");
  for (let i = 0; i < steps.length; i++) {
    steps[i].style.display = "none";
  }
  document.getElementById("step" + step).style.display = "block";
}

function nextStep(step) {
  if (validateStep(step)) {
    currentStep++;
    showStep(currentStep);
  }
}

function prevStep(step) {
  currentStep--;
  showStep(currentStep);
}

function validateStep(step) {
  if (step === 1) {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    if (name === "" || email === "") {
      alert("Please fill out all fields in Step 1");
      return false;
    }
  }
  if (step === 2) {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    if (user === "" || pass === "") {
      alert("Please fill out all fields in Step 2");
      return false;
    }
  }
  return true;
}

document.getElementById("regForm").onsubmit = function () {
  let phone = document.getElementById("phone").value;
  let city = document.getElementById("city").value;
  if (phone === "" || city === "") {
    alert("Please fill out all fields in Step 3");
    return false;
  }
  alert("Registration Successful!");
  return true;
};
