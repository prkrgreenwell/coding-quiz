// Set variables for the different screens
var openingScreen = document.getElementById("opening-screen");
var quizScreen = document.getElementById("quiz-screen");
var highScoreScreen = document.getElementById("high-score-screen");
var endScreen = document.getElementById("end-screen");

// Set variables for all the buttons we will be using
var beginQuiz = document.querySelector("#start-button");
var viewScoresLink = document.getElementById("view-high-scores");
var time = document.getElementById("time");
var question = document.getElementById("question");
var answerSection = document.querySelector(".answer-section");
var answerA = document.getElementById("answer-a");
var answerB = document.getElementById("answer-b");
var answerC = document.getElementById("answer-c");
var answerD = document.getElementById("answer-d");
var finalScore = document.getElementById("final-score");
var enterName = document.getElementById("enter-name");
var nameInput = document.getElementById("name-input");
var submitButton = document.getElementById("submit");
var mainMenuButton = document.getElementById("main-menu");
var mainMenuScores = document.getElementById("go-back");
var clearScores = document.getElementById("clear-scores");
var hs1 = document.getElementById("hs-1");
var hs2 = document.getElementById("hs-2");
var hs3 = document.getElementById("hs-3");
var hs4 = document.getElementById("hs-4");
var hs5 = document.getElementById("hs-5");
var timeLeft;

// timer function: called when moved to quiz screen
function startQuiz() {
  timeLeft = 30;
  question.innerHTML = "Which of the following is not a loop method?";
  question.setAttribute("question", "question-1");
  answerA.innerHTML = "for";
  answerB.innerHTML = "while";
  answerC.innerHTML = "if";
  answerD.innerHTML = "do while";
  answerC.setAttribute("wrongness", "correct");

  function timesUp(timerId) {
    clearTimeout(timerId);
    time.innerHTML = "Time: 0";
    quizScreen.style.display = "none";
    endScreen.style.display = "flex";
    finalScore.innerHTML = "Try Again?";
    submitButton.style.display = "none";
    mainMenuButton.style.display = "inline";
    nameInput.style.display = "none";
    enterName.style.display = "none";

    viewScoresLink.style.visibility = "visible";
  }

  var timerId = setInterval(countDown, 1000);
  function countDown() {
    if (quizScreen.style.display == "flex") {
      if (timeLeft < 6) {
        time.style.color = "red";
      }
      if (timeLeft > 0) {
        time.innerHTML = "Time: " + timeLeft;
        timeLeft--;
      } else {
        timesUp(timerId);
      }
    } else {
      clearInterval(timerId);
    }
  }
}

function highScores() {
  openingScreen.style.display = "none";
  viewScoresLink.style.visibility = "hidden";
  highScoreScreen.style.display = "flex";
  endScreen.style.display = "none";
}

mainMenuScores.addEventListener("click", (e) => {
  openingScreen.style.display = "flex";
  highScoreScreen.style.display = "none";
  viewScoresLink.style.visibility = "visible";
  time.style.visibility = "hidden";
});

function setNewScore(name, time) {
  var newName = name;
  var score = time;
  var scoreArray = [hs1, hs2, hs3, hs4, hs5];

  for (var i = 0; i < scoreArray.length; i++) {
    var currentScore = scoreArray[i].getAttribute("score");
    if (currentScore == null) {
      return;
    }
    if (score > currentScore) {
      scoreArray[i].innerHTML = newName + ": " + score + " s";
      scoreArray[i].setAttribute("score", score);
      score = currentScore;
      currentScore = null;
    }
  }
}

// Moves from beginning screen and starts the quiz
beginQuiz.addEventListener("click", (e) => {
  startQuiz();
  time.style.color = "black";
  openingScreen.style.display = "none";
  viewScoresLink.style.visibility = "hidden";
  quizScreen.style.display = "flex";
  time.style.visibility = "visible";
});

// Moves from start screen to high score page
viewScoresLink.addEventListener("click", (e) => {
  highScores();
});

//Goes through the quiz
if (answerSection) {
  answerSection.addEventListener("click", (e) => {
    var wrongness = e.target.getAttribute("wrongness");
    var questionNumber = question.getAttribute("question");

    //deduct time if answer is wrong
    if (wrongness === "wrong") {
      timeLeft -= 10;
    } else {
      //Switches to question 2
      if (questionNumber === "question-1") {
        question.innerHTML =
          "What symbol do you use to make an inline comment?";
        question.setAttribute("question", "question-2");

        answerA.innerHTML = "//";
        answerA.setAttribute("wrongness", "correct");

        answerB.innerHTML = "**";

        answerC.innerHTML = "@@";
        answerC.setAttribute("wrongness", "wrong");

        answerD.innerHTML = "$$";
      }

      //Switches to question 3
      if (questionNumber === "question-2") {
        question.innerHTML =
          "Which of the following is not how you declare a variable?";
        question.setAttribute("question", "question-3");

        answerA.innerHTML = "var";
        answerA.setAttribute("wrongness", "wrong");

        answerB.innerHTML = "set";
        answerB.setAttribute("wrongness", "correct");

        answerC.innerHTML = "let";

        answerD.innerHTML = "const";
      }

      //Switches to question 4
      if (questionNumber === "question-3") {
        question.innerHTML =
          "How would you find the amount of characters in string 'str'?";
        question.setAttribute("question", "question-4");

        answerA.innerHTML = "length(str)";

        answerB.innerHTML = "str.length";

        answerC.innerHTML = "str[length]";

        answerD.innerHTML = "numberOfCharactersInString str";
      }

      //Switches to question 5
      if (questionNumber === "question-4") {
        question.innerHTML =
          "Which of the following booleans would return as true?";
        question.setAttribute("question", "question-5");

        answerA.innerHTML = "(5 + '2' === 7)";

        answerB.innerHTML = "(5 + 2 = 7)";
        answerB.setAttribute("wrongness", "wrong");

        answerC.innerHTML = "(five plus two equals seven)";

        answerD.innerHTML = "(5 + 2 == 7)";
        answerD.setAttribute("wrongness", "correct");
      }

      //Switches to ending screen
      if (questionNumber === "question-5") {
        question.setAttribute("question", "question-1");
        finalScore.innerHTML = "Your Final Score is: " + timeLeft;
        time.innerHTML = "Time: " + timeLeft;
        quizScreen.style.display = "none";
        endScreen.style.display = "flex";
        mainMenuButton.style.display = "none";
        submitButton.style.display = "inline";
        nameInput.style.display = "inline";
        enterName.style.display = "inline";
        answerD.setAttribute("wrongness", "wrong");
      }
    }
  });
}

//All my event listeners in one place
mainMenuButton.addEventListener("click", (e) => {
  endScreen.style.display = "none";
  openingScreen.style.display = "flex";
  time.style.visibility = "hidden";
});

submitButton.addEventListener("click", (e) => {
  var newScore = document.getElementById("name-input").value;
  console.log(newScore);
  console.log(timeLeft);
  document.getElementById("name-input").value = "";
  setNewScore(newScore, timeLeft);
  highScores();
});

// To-do list
// high score screen adds extra numbers of scores
// still need to set local storage
