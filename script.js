const daysEL = document.getElementById("days")
const hoursEL = document.getElementById("hours")
const minutesEL = document.getElementById("minutes")
const secondsEL = document.getElementById("seconds")

const anniversaryDate = "May 16 2022"

function countdown()
{
    const today = new Date()
    const anniDate = new Date(anniversaryDate)
    const totalSecond = (today - anniDate) / 1000;

    const days = Math.floor(totalSecond / 3600 / 24)
    const hours = Math.floor(totalSecond / 3600) % 24
    const minutes = Math.floor(totalSecond / 60) % 60
    const seconds = Math.floor(totalSecond % 60)

    daysEL.innerHTML = formatTime(days);
    hoursEL.innerHTML = formatTime(hours);
    minutesEL.innerHTML = formatTime(minutes);
    secondsEL.innerHTML = formatTime(seconds);
}

function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}

countdown()

setInterval(countdown, 1000)




