function updateClock() {
    var now = new Date();
    var hr = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();

    if (hr < 10) {
        hr = "0" + hr;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }

    var timeString = hr + ":" + min + ":" + sec;
    document.getElementById("clockDisplay").innerHTML = timeString;
}

setInterval(updateClock, 1000);
updateClock(); 
