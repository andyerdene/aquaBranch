let startingMinutes = 2;
let time = startingMinutes * 60;

setInterval(upDateCountdown, 1000);

const minutes = math.floor(time / 60);
let seconds = time % 60;

let timer = document.getElementById('countdown');
timer.innerHTML = `${minutes}:${seconds}`;
time--;








  




