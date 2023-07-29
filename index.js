let [seconds, minutes, hours] = [0, 0, 0]
let time = document.getElementById("displayTime")
let timing = null

const StopWatch = () => {
    seconds++;
    if (seconds == 60) {
        // after completing 60 sec
        seconds = 0;
        minutes++;
    }
    if (minutes == 60) {
        minutes == 0;
        hours++
    }
    // display the time
    let s = seconds < 10 ? "0" + seconds : seconds
    let m = minutes < 10 ? "0" + minutes : minutes
    let h = hours < 10 ? "0" + hours : hours
    time.innerHTML = h + ":" + m + ":" + s
}
const StartTask = () => {
    if (time !== null) {
        clearInterval(timing)
    }
    timing = setInterval(StopWatch, 1000)
}
const StopTask = () => {
    clearInterval(timing)
    timing = null
}

const ResetTask = () => {
    StopTask()
    seconds = 0, minutes = 0, hours = 0
    time.innerHTML = "00:00:00"

}
