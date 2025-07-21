var timer;
var remainingTime = 0;

function startTimer() {
    var userInput = document.getElementById("secondsInput").value;

    if (userInput === "" || isNaN(userInput)) {
        alert("Please enter valid seconds.");
        return;
    }

    remainingTime = parseInt(userInput);
    document.getElementById("timeDisplay").innerHTML = "Time Left: " + remainingTime + " sec";

    timer = setInterval(function () {
        remainingTime = remainingTime - 1;
        document.getElementById("timeDisplay").innerHTML = "Time Left: " + remainingTime + " sec";

        if (remainingTime <= 0) {
            clearInterval(timer);
            document.getElementById("timeDisplay").innerHTML = "Time's up!";
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    document.getElementById("timeDisplay").innerHTML = "Time Left: 0 sec";
    document.getElementById("secondsInput").value = "";
}
