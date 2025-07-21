var hour = 0;
var minute = 0;
var second = 0;
var run = false;
var intervalId;

function format(n) {
  if (n < 10) {
    return "0" + n;
  } else {
    return n;
  }
}
function updateStopwatch() {
  second = second + 1;
  if (second === 60) {
    second = 0;
    minute = minute + 1;
  }
  if (minute === 60) {
    minute = 0;
    hour = hour + 1;
  }

  var show = format(hour) + ":" + format(minute) + ":" + format(second);
  document.getElementById("stopwatch").innerHTML = show;
}
function startStopwatch() {
  if (!run) {
    run = true;
    intervalId = setInterval(updateStopwatch, 1000);
  }
}
function pauseStopwatch() {
  clearInterval(intervalId);
  run = false;
}
function resetStopwatch() {
  clearInterval(intervalId);
  run = false;
  hour = 0;
  minute = 0;
  second = 0;
  document.getElementById("stopwatch").innerHTML = "00:00:00";
}
