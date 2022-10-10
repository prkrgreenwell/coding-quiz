// Set variables for the different screens
var openingScreen = document.getElementById("opening-screen");
var quizScreen = document.getElementById("quiz-screen");
var highScoreScreen = document.getElementById("high-score-screen");

// Set variables for all the buttons we will be using
var beginQuiz = document.querySelector("#start-button");
var viewScoresLink = document.getElementById("view-high-scores");

// Set up the timer
var count = 10;
if (count > 0) {
  setInterval(countDown, 1000);
}
function countDown() {
  console.log(count);
  count--;
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
