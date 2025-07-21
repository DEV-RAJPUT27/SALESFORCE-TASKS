function calculateAge() {
  const dobInput = document.getElementById("dob");
  const result = document.getElementById("result-area");

  if (dobInput.value === "") {
    result.textContent = "⚠️ Please enter your birth date!";
    return;
  }

  const dob = new Date(dobInput.value);
  const today = new Date();

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    days += 30;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  result.textContent = `🎉 You are ${years} years, ${months} months and ${days} days old!`;
}
