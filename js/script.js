// Disable Buttons
let home_btn = document.getElementsByClassName("home_btn");
let guest_btn = document.getElementsByClassName("guest_btn");
let h_fouls_btn = document.getElementById("h_fouls_btn");
let g_fouls_btn = document.getElementById("g_fouls_btn");

function disable_btn() {
  for (let i = 0; i < home_btn.length; i++) {
    home_btn[i].disabled = true;
    guest_btn[i].disabled = true;
  }
  h_fouls_btn.disabled = true;
  g_fouls_btn.disabled = true;
}
disable_btn();


// Functions for sum one number, two number.....
let home = document.getElementById("home");
let guest = document.getElementById("guest");
let homeScore = 0;
let guestScore = 0;

function homeScore_one() {
  homeScore += 1;
  home.textContent = homeScore;
}

function homeScore_two() {
  homeScore += 2;
  home.textContent = homeScore;
}

function homeScore_three() {
  homeScore += 3;
  home.textContent = homeScore;
}

// Guest Score Functions
function guestScore_one() {
  guestScore += 1;
  guest.textContent = guestScore;
}

function guestScore_two() {
  guestScore += 2;
  guest.textContent = guestScore;
}

function guestScore_three() {
  guestScore += 3;
  guest.textContent = guestScore;
}

let home_fouls_btn = document.getElementById("home_fouls");
let guest_fouls_btn = document.getElementById("guest_fouls");

let home_fouls = 0;
let guest_fouls = 0;
function homeFouls_btn() {
  home_fouls += 1;
  home_fouls_btn.textContent = home_fouls;
}

function guestFouls_btn() {
  guest_fouls += 1;
  guest_fouls_btn.textContent = guest_fouls;
}


const startButton = document.getElementById("start_btn");
const pause_btn = document.getElementById("pause_btn");
const resume_btn = document.getElementById("resume_btn");
const timer = document.getElementById("timer");

let preiod_screen = document.getElementById("preiod");
let preiod = 0;

let timeLeft;
let timerInterval;
let remainingTime;

// Timer Function
function startTimer() {
  resume_btn.disabled = true;
  startButton.disabled = true;
  if (timeLeft === 0) {
    timer.textContent = "00:00";
  } else {
    timerInterval = setInterval(() => {
      timeLeft--; // Math.floor it is a function that can rounds a number. example(3.9) ---> 4
      timer.textContent = `${Math.floor(timeLeft / 60)}:${String(
        timeLeft % 60 
      ).padStart(2, "0")}`; // padStart returns 01,02,03....

      if (timeLeft === 0) {
        clearInterval(timerInterval);
        timer.textContent = "Time's up!";

        for (let i = 0; i < home_btn.length; i++) {
          home_btn[i].disabled = true;
          guest_btn[i].disabled = true;
        }
      }
    }, 1000);
  }
}

// Pause Function, it can pause the timer.
function pauseTimer() {
  clearInterval(timerInterval);
  remainingTime = timeLeft;
}

// When button Start click, timer Start it.
startButton.addEventListener("click", function () {
  preiod += 1;
  preiod_screen.textContent = preiod;

  for (let i = 0; i < home_btn.length; i++) {
    home_btn[i].disabled = false;
    guest_btn[i].disabled = false;
  }
  h_fouls_btn.disabled = false;
  g_fouls_btn.disabled = false;

  timeLeft = 60 * 15; // 15 minutes
  startTimer();
});

pause_btn.addEventListener("click", function () {
  resume_btn.disabled = false;
  pauseTimer();
});

// Resume Function that can resume the timer.
resume_btn.addEventListener("click", function () {
  timeLeft = remainingTime;
  resume_btn.disabled = true;
  startTimer();
});

// When click reset button all data remove, without period counter. 
reset_btn.addEventListener("click", function () {
  clearInterval(timerInterval);
  timeLeft = 0;
  homeScore = 0;
  guestScore = 0;
  home_fouls = 0;
  guest_fouls = 0;

  for (let i = 0; i < home_btn.length; i++) {
    home_btn[i].disabled = true;
    guest_btn[i].disabled = true;
  }
  h_fouls_btn.disabled = true;
  g_fouls_btn.disabled = true;

  home.textContent = 0;
  guest.textContent = 0;
  home_fouls_btn.textContent = 0;
  guest_fouls_btn.textContent = 0;

  timer.textContent = "00:00";
  startButton.disabled = false;
});

// Save Function that can save the Home and Guest Scores.
let home_score = document.getElementById("home_score");
let guest_score = document.getElementById("guest_score");
let save_btn = document.getElementById("save_btn");

function saveFunction() {
  home_score.textContent += homeScore + " -- ";
  guest_score.textContent += guestScore + " -- ";
}
