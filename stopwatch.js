let startTime, updatedTime, difference, running = false;
let timerInterval;

const timeDisplay = document.getElementById("time");

function startTimer() {
    if(!running){
        startTime = new Date().getTime() - (difference || 0);
        timerInterval = setInterval(updateTime,10)
        running = true;
    }
}

function stopTimer() {
    clearInterval(timerInterval);
    running = false;
}

function resetTimer() {
    clearInterval(timerInterval);
    running = false;
    difference = 0;
    timeDisplay.innerHTML = "00:00:00";
}

function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    timeDisplay.innerHTML = (hours < 10 ? "0" + hours : hours) + ":" +
                            (minutes < 10 ? "0" + minutes : minutes) + ":" +
                            (seconds < 10 ? "0" + seconds : seconds);
}

// Event listeners for buttons
document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
