let sampleSentences = [
  "The cat sat on the mat.",
  "They are playing football in the ground.",
  "JavaScript makes web pages interactive and fun.",
  "Practice daily to type faster and more accurately."
];

let timer = 0;
let intervalId;
let startTime;
let originalText = "";
let typingArea = document.getElementById("typing-area");
let displayText = document.getElementById("display-text");
let wpmEl = document.getElementById("wpm");
let accuracyEl = document.getElementById("accuracy");
let timeEl = document.getElementById("time");

document.getElementById("start-button").onclick = function() {
  let randomIndex = Math.floor(Math.random() * sampleSentences.length);
  originalText = sampleSentences[randomIndex];
  displayText.textContent = originalText;

  typingArea.value = "";
  typingArea.disabled = false;
  typingArea.focus();

  timer = 0;
  timeEl.textContent = "0";
  wpmEl.textContent = "0";
  accuracyEl.textContent = "0";

  clearInterval(intervalId);
  intervalId = setInterval(() => {
    timer++;
    timeEl.textContent = timer;
  }, 1000);
};

typingArea.addEventListener("input", () => {
  let typed = typingArea.value;
  if (typed.length === originalText.length) {
    clearInterval(intervalId);
    typingArea.disabled = true;

    let words = typed.split(" ").length;
    let wpm = Math.round((words / timer) * 60);
    wpmEl.textContent = isNaN(wpm) ? 0 : wpm;

    let correctChars = 0;
    for (let i = 0; i < originalText.length; i++) {
      if (typed[i] === originalText[i]) {
        correctChars++;
      }
    }

    let accuracy = Math.round((correctChars / originalText.length) * 100);
    accuracyEl.textContent = accuracy;
  }
});
