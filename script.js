//  Time Variable Decleration
let timerMilliSec = document.getElementById("time-millisec")
let timerSeconds = document.getElementById("time-seconds")
let timerMinutes = document.getElementById("time-minutes")
let timerHours = document.getElementById("time-hours")

// BTN  Variable Decleration
let btnStart = document.getElementById("btn-start")
let btnSplit = document.getElementById("btn-split")
let btnReset = document.getElementById("btn-reset")
let lapEntry = document.getElementById("lap-entry")
let splitLap = document.getElementById("split-lap")

// Decleration and Intializing variable
let hours = 0
let minutes = 0
let seconds = 0
let milliSeconds = 0

// Decleration and intilization of value display variables
let displayHours = hours
let displayMinutes = minutes
let displaySeconds = seconds
let displayMilliSeconds = milliSeconds

// StopWatch Status
let stopWatchStatus = "stopped"

// set Interval
let interval = null

//set split lap
let lapNow = null
let count = 0

// Stopwatch start handler
function start() {
 	milliSeconds++

 	// set display Millisecinds variable 
 	if ( milliSeconds < 10 ) {
 		displayMilliSeconds = "0" + milliSeconds.toString()
 	} else {
 		displayMilliSeconds = milliSeconds
 	}

 	// set display second variable
 	if ( seconds < 10 ) {
 		displaySeconds = "0 " + seconds.toString()
 	} else {
 		displaySeconds = seconds
 	}

 	// set display minutes variable
 	if ( minutes < 10 ) {
 		displayMinutes = "0" + minutes.toString()
 	}

 	// set display hours variable
 	if ( hours < 10 ) {
 		displayHours = "0" + hours.toString()
 	}

 	// Calculate time
 	if ( milliSeconds / 100 === 1 ) {
 		seconds++
 		milliSeconds = 0

 		// calculate minutes
 		if ( seconds / 60 === 1 ) {
 			minutes++
 			seconds = 0

 			//calculate hours
	 		if ( minutes / 60 === 1 ) {
	 			hours++
	 			minutes = 0
	 		}
 		}
 	}

 	// Dispaly Values
 	timerMilliSec.innerHTML = displayMilliSeconds
 	timerSeconds.innerHTML = displaySeconds
 	timerMinutes.innerHTML = displayMinutes
 	timerHours.innerHTML = displayHours


}

// toggle start and stop functionality
function toggleStartStop() {
 	if (stopWatchStatus == "stopped") {
 		interval = setInterval(start, 10)
 		btnSplit.disabled = false
 		btnReset.disabled = true
 		btnStart.innerHTML = "Stop"
 		stopWatchStatus = "start"
 	} else {
 		clearInterval(interval)
 		btnSplit.disabled = true
 		btnReset.disabled = false
 		btnStart.innerHTML = "Start"
 		stopWatchStatus = "stopped"
 		splitTime("Pause")
 	}
}

// Reset watch handler
function restWatch() {
	clearInterval(interval)
	hours = 0
	minutes = 0
	seconds = 0
	milliSeconds = 0
	lapNow = 0
	timerMilliSec.innerHTML = "00"
 	timerSeconds.innerHTML = "00"
 	timerMinutes.innerHTML = "00"
 	timerHours.innerHTML = "00"
 	splitLap.innerHTML = "Split Time"


}

// split time laps
function splitTime(status) {
	count = count+1
	lapNow = `<div class="lap ${status}"><span> #${count} </span> ${hours} : ${minutes} : ${seconds} : ${milliSeconds} <span> ${status}</span> </div>`
	lapEntry.innerHTML += lapNow
	splitLap.innerHTML = `<div class="lap">${hours} : ${minutes} : ${seconds} : ${milliSeconds} </div>`
}

// Add click event listners on BTN
btnStart.addEventListener("click", toggleStartStop)
btnReset.addEventListener("click", restWatch)
btnSplit.addEventListener("click", () => splitTime("Split"))