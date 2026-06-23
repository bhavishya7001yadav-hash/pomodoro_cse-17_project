
let minutes = 25;
let seconds = 0;

let timer;
let running = false;
let completedSessions = 0;

const timerDisplay = document.getElementById("timer");
const countDisplay = document.getElementById("count");
const progress = document.querySelector(".progress");

const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");

// Show timer on screen
function updateTimer() {

    let min = minutes < 10 ? "0" + minutes : minutes;
    let sec = seconds < 10 ? "0" + seconds : seconds;

    timerDisplay.innerHTML = min + ":" + sec;
}

// Start Timer
startBtn.onclick = function () {

    if (running)
        return;

    running = true;

    timer = setInterval(function () {

        if (seconds == 0) {

            if (minutes == 0) {

                clearInterval(timer);

                running = false;

                alert("🎉 Mission Complete!");

                completedSessions++;

                countDisplay.innerHTML = completedSessions;

                progress.style.width = "100%";

                return;
            }

            minutes--;
            seconds = 59;

        } else {

            seconds--;

        }

        // Progress Bar
        let totalSeconds = minutes * 60 + seconds;
        let percent = (totalSeconds / 1500) * 100;
        progress.style.width = percent + "%";

        updateTimer();

    }, 1000);

};

// Pause Timer
pauseBtn.onclick = function () {

    clearInterval(timer);

    running = false;

};

// Reset Timer
resetBtn.onclick = function () {

    clearInterval(timer);

    running = false;

    minutes = 25;
    seconds = 0;

    progress.style.width = "100%";

    updateTimer();

};

// Show timer when page loads
updateTimer();