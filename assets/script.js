// Set variables for all the buttons we will be using

var question = document.querySelector("#question");
var answerA = document.querySelector("#answer-a");
var answerB = document.querySelector("#answer-b");
var answerC = document.querySelector("#answer-c");
var answerD = document.querySelector("#answer-d");

var openToQuiz = document
  .getElementById("start-button")
  .addEventListener("click", function (event) {
    console.log("hey");
    document.getElementById("opening-screen").style.display = "none";
    document.getElementById("view-high-scores").style.visibility = "hidden";
    document.getElementById("quiz-screen").style.display = "flex";
  });
