let voiceList = document.getElementById("voiceList");
let textInput = document.getElementById("textInput");

let voices = [];

function loadVoices() {
  voices = window.speechSynthesis.getVoices();
  voiceList.innerHTML = "";
  voices.forEach((voice, index) => {
    let option = document.createElement("option");
    option.value = index;
    option.text = voice.name + " (" + voice.lang + ")";
    voiceList.appendChild(option);
  });
}

window.speechSynthesis.onvoiceschanged = loadVoices;

function speakText() {
  let text = textInput.value.trim();
  if (text === "") {
    alert("Please enter text to speak.");
    return;
  }

  let speech = new SpeechSynthesisUtterance(text);
  let selectedVoice = voices[voiceList.value];
  speech.voice = selectedVoice;

  window.speechSynthesis.speak(speech);
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
