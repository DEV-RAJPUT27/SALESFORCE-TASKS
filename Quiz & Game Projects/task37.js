function play(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById("user-choice").innerText = "You Chose: " + userChoice;
  document.getElementById("computer-choice").innerText = "Computer Chose: " + computerChoice;

  let result = "";

  if (userChoice === computerChoice) {
    result = "It's a Draw!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "You Win!";
  } else {
    result = "You Lose!";
  }

  document.getElementById("final-result").innerText = "Result: " + result;
}

function restartGame() {
  document.getElementById("user-choice").innerText = "You Chose: -";
  document.getElementById("computer-choice").innerText = "Computer Chose: -";
  document.getElementById("final-result").innerText = "Result: -";
}
