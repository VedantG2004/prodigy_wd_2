let startTime;
let elapsedTime = 0;
let timerInterval;
const display = document.getElementById("display");

function timeToString(time) {
    let hr = Math.floor(time / 3600000);
    let min = Math.floor((time % 3600000) / 60000);
    let sec = Math.floor((time % 60000) / 1000);
    let ms = Math.floor((time % 1000) / 10);

    return (
        (hr < 10 ? "0" + hr : hr) + ":" +
        (min < 10 ? "0" + min : min) + ":" +
        (sec < 10 ? "0" + sec : sec) + ":" +
        (ms < 10 ? "0" + ms : ms)
    );
}

function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        display.textContent = timeToString(elapsedTime);
    }, 10);
    document.getElementById("startBtn").disabled = true;
}

function stopTimer() {
    clearInterval(timerInterval);
    document.getElementById("startBtn").disabled = false;
}

function resetTimer() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    display.textContent = "00:00:00:00";
    document.getElementById("startBtn").disabled = false;
}

// Button event listeners
document.getElementById("startBtn").addEventListener("click", startTimer);
document.getElementById("stopBtn").addEventListener("click", stopTimer);
document.getElementById("resetBtn").addEventListener("click", resetTimer);