// stopwatch setup
let clock = document.getElementById('clock');

let startBtn = document.querySelector("#start");
let stopBtn = document.querySelector("#stop");
let resetBtn = document.querySelector("#reset");

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

clock.innerText = `00 : 00 : 00 : 00`;
let myInterval;
let hr = 0; //hour
let mn = 0; //min
let sc = 0; //sec
let ms = 0; //ms

function startTimer() {
    myInterval = setInterval(function () {
        ms++;
        clock.innerText = `${hr < 10 ? "0" : ""}${hr} : ${mn < 10 ? "0" : ""
            }${mn} : ${sc < 10 ? "0" : ""}${sc} : ${ms < 10 ? "0" : ""}${ms}`;

        if (ms == 60) {
            ms = 0;
            sc++;
        }
        if (sc == 60) {
            sc = 0;
            mn++;
        }
        if (mn == 60) {
            mn = 0;
            hr++;
        }
    }, 17);
    startBtn.disabled = true;
    resetBtn.disabled = true;
}

function stopTimer() {
    clearInterval(myInterval);
    startBtn.disabled = false;
    resetBtn.disabled = false;
}

function resetTimer() {
    clock.innerText = `00 : 00 : 00 : 00`;
    hr = 0;
    mn = 0;
    sc = 0;
    ms = 0;
}