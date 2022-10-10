// Set variables for the different screens
var openingScreen = document.getElementById("opening-screen");
var quizScreen = document.getElementById("quiz-screen");
var highScoreScreen = document.getElementById("high-score-screen");
var endScreen = document.getElementById("end-screen");

// Set variables for all the buttons we will be using
var beginQuiz = document.querySelector("#start-button");
var viewScoresLink = document.getElementById("view-high-scores");
var time = document.getElementById("time");

// timer function: called when moved to quiz screen
function startTimer() {
  //TO-DO time penalty
  var timeLeft = 10;

  var timerId = setInterval(countDown, 1000);

  function countDown() {
    if (timeLeft < 6) {
      time.style.color = "red";
    }
    if (timeLeft > 0) {
      time.innerHTML = "Time: " + timeLeft;
      timeLeft--;
    } else {
      timesUp(timerId);
    }
  }
}

function timesUp(timerId) {
  clearTimeout(timerId);
  time.innerHTML = "Time: 0";
  quizScreen.style.display = "none";
  endScreen.style.display = "flex";

  viewScoresLink.style.visibility = "visible";
}

// Moves from beginning screen and starts the quiz
beginQuiz.addEventListener("click", (e) => {
  startTimer();
  openingScreen.style.display = "none";
  viewScoresLink.style.visibility = "hidden";
  quizScreen.style.display = "flex";
  time.style.visibility = "visible";
});

// Moves from start screen to high score page
viewScoresLink.addEventListener("click", (e) => {
  openingScreen.style.display = "none";
  viewScoresLink.style.visibility = "hidden";
  highScoreScreen.style.display = "flex";
});
