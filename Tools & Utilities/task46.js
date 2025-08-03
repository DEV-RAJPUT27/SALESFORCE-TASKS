function checkStrength() {
  let input = document.getElementById("passwordInput").value;
  let bar = document.getElementById("strengthBar");
  let text = document.getElementById("strengthText");

  let strength = 0;

  if (input.length > 5) strength += 1;
  if (input.match(/[a-z]/)) strength += 1;
  if (input.match(/[A-Z]/)) strength += 1;
  if (input.match(/[0-9]/)) strength += 1;
  if (input.match(/[\W]/)) strength += 1;

  if (strength === 0) {
    bar.style.width = "0px";
    text.innerText = "Strength: ";
    bar.style.backgroundColor = "red";
  } else if (strength <= 2) {
    bar.style.width = "80px";
    text.innerText = "Strength: Weak";
    bar.style.backgroundColor = "red";
  } else if (strength === 3) {
    bar.style.width = "160px";
    text.innerText = "Strength: Moderate";
    bar.style.backgroundColor = "orange";
  } else {
    bar.style.width = "240px";
    text.innerText = "Strength: Strong";
    bar.style.backgroundColor = "green";
  }
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
