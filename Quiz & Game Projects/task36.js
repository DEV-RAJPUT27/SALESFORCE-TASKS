let questions = [
  {
    q: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Venus", "Jupiter"],
    answer: "Mars"
  },
  {
    q: "What does CSS stand for?",
    options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Syntax", "None"],
    answer: "Cascading Style Sheets"
  },
  {
    q: "Who is the father of computers?",
    options: ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"],
    answer: "Charles Babbage"
  },
  {
    q: "Which tag is used to link JavaScript?",
    options: ["<js>", "<javascript>", "<script>", "<link>"],
    answer: "<script>"
  }
];

let currentIndex = 0;
let score = 0;
let timeLeft = 30;
let timer;

function startQuiz() {
  currentIndex = 0;
  score = 0;
  timeLeft = 30;
  document.getElementById("result").innerText = "";
  document.getElementById("restartBtn").style.display = "inline-block";
  document.getElementById("nextBtn").disabled = false;
  loadQuestion();
  timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
  if (timeLeft <= 0) {
    clearInterval(timer);
    showResult("⏰ Time's up! Score: " + score);
    return;
  }
  document.getElementById("timer").innerText = "Time Left: " + timeLeft + "s";
  timeLeft--;
}

function loadQuestion() {
  let q = questions[currentIndex];
  document.getElementById("question").innerText = q.q;

  let optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach(opt => {
    let btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(opt, btn);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(selected, btnClicked) {
  let correctAns = questions[currentIndex].answer;
  let allButtons = document.querySelectorAll("#options button");

  allButtons.forEach(button => {
    button.disabled = true;
    if (button.innerText === correctAns) {
      button.classList.add("correct");
    }
    if (button === btnClicked && selected !== correctAns) {
      button.classList.add("wrong");
    }
  });

  if (selected === correctAns) {
    score++;
  }
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    clearInterval(timer);
    showResult("✅ Quiz Completed! Score: " + score + "/" + questions.length);
  }
}

function restartQuiz() {
  clearInterval(timer);
  startQuiz();
}

function showResult(msg) {
  document.getElementById("result").innerText = msg;
  document.getElementById("nextBtn").disabled = true;
}
