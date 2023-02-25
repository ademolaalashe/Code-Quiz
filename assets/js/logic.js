const timeDisplay = document.getElementById("time");
const startScreen = document.getElementById("start-screen");
const startButton = document.getElementById("start");
const questionsBox = document.getElementById("questions");
const questionTitle = document.getElementById("question-title");
const choices = document.getElementById("choices");
const endScreen = document.getElementById("end-screen");
const finalScore = document.getElementById("final-score");
const initials = document.getElementById("initials");
const submit = document.getElementById("submit");
const feedback = document.getElementById("feedback");

function end() {
  questionsBox.classList.add("hide");
  endScreen.classList.remove("hide");
  stopInterval();
}

// Adding event listener to innitialize the start function when the button in clicked
startButton.addEventListener("click", start);

function start() {
  startScreen.classList.add("hide");
  questionsBox.classList.remove("hide");
  // On the start, start the timer
  timeInterval();
}

// Set timer for the quiz
let count = 70;
let timerInterval;

function timeInterval() {
  timeDisplay.innerText = count;

  timerInterval = setInterval(function () {
    count--;
    timeDisplay.innerText = count;

    if (count === 0) {
      stopInterval();
      end();
    }
  }, 1000);
}

function stopInterval() {
  clearInterval(timerInterval);
}

timeDisplay.innerText = count;

//Telling to set the text inside h2 to the value wanted
questionTitle.innerText = codeQuiz[0].question;

let currentQuestionIndex = 0;


let score = 0;

// variable to keep track of whether a question has been answered
let answered = false;

function checkAnswer(event) {
  // Code to get the value of the button
  let selectedAnswer = event.target.value;

  if (selectedAnswer === codeQuiz[currentQuestionIndex].answer) {
    feedback.innerText = "Correct!";
    score +=1
    // This code is to display if the selected answer is correct
    feedback.classList.remove("hide");
  } else {
    feedback.innerText = "Wrong. The correct answer is: " + codeQuiz[currentQuestionIndex].answer;
    count -= 10; // reduce timer by 10 seconds
    // Code to display is answer is wrong
    feedback.classList.remove('hide');
  }

}