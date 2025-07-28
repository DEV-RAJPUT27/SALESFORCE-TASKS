let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const userGuess = parseInt(document.getElementById("guessInput").value);
  const feedback = document.getElementById("feedback");
  const attemptsText = document.getElementById("attempts");

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    feedback.textContent = "Please enter a valid number between 1 and 100!";
    feedback.style.color = "crimson";
    return;
  }

  attempts++;

  if (userGuess === secretNumber) {
    feedback.textContent = "🎉 Correct! You guessed it!";
    feedback.style.color = "green";
  } else if (userGuess < secretNumber) {
    feedback.textContent = "Too low! Try again.";
    feedback.style.color = "blue";
  } else {
    feedback.textContent = "Too high! Try again.";
    feedback.style.color = "blue";
  }

  attemptsText.textContent = `Attempts: ${attempts}`;
}

function restartGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById("guessInput").value = "";
  document.getElementById("feedback").textContent = "";
  document.getElementById("attempts").textContent = "";
}
