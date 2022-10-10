// Set variables for the different screens
var openingScreen = document.getElementById("opening-screen");
var quizScreen = document.getElementById("quiz-screen");
var highScoreScreen = document.getElementById("high-score-screen");

// Set variables for all the buttons we will be using
var beginQuiz = document.querySelector("#start-button");
var viewScoresLink = document.getElementById("view-high-scores");

// Set up the timer
//TO-DO get timer to stop at 0
//TO-DO display timer on screen
//TO-DO time penalty
//TO-DO move to end screen when time runs out
var timeLeft = 10;
var time = document.getElementById("time");

var timerId = setInterval(countDown, 1000);

function countDown() {
  if (timeLeft >= 0) {
    time.innerHTML = "Time: " + timeLeft;
    timeLeft--;
  } else {
    clearTimeout;
    //insert breakpoint here
  }
}

// Moves from beginning screen and starts the quiz
beginQuiz.addEventListener("click", (e) => {
  openingScreen.style.display = "none";
  viewScoresLink.style.visibility = "hidden";
  quizScreen.style.display = "flex";
});

// Moves from start screen to high score page
viewScoresLink.addEventListener("click", (e) => {
  openingScreen.style.display = "none";
  viewScoresLink.style.visibility = "hidden";
  highScoreScreen.style.display = "flex";
});
