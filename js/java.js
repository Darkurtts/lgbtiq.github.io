const days = document.getElementById("d");
const hours = document.getElementById("h");
const mins = document.getElementById("m");
const seconds = document.getElementById("s");
const idahot = '17 May 2023';

function countTimer() {
    const newYearDate = new Date(idahot);
    const currentDate = new Date();
    const totalSeconds = (newYearDate - currentDate) / 1000;
    const daysCalc = Math.floor(totalSeconds / 3600 / 24);
    const hoursCalc = Math.floor(totalSeconds / 3600) % 24;
    const minsCalc = Math.floor(totalSeconds / 60) % 60;
    const secondsCalc = Math.floor(totalSeconds % 60);
    days.innerHTML = daysCalc;
    hours.innerHTML = hoursCalc;
    mins.innerHTML = minsCalc;
    seconds.innerHTML = secondsCalc;
}
countTimer();
setInterval(countTimer, 1000);