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

function checkAnswer(event) {
  // Get the value of the button
  let selectedAnswer = event.target.value;

  if (selectedAnswer === codeQuiz[currentQuestionIndex].answer) {
    feedback.innerText = "Correct!";
  } else {
    feedback.innerText = "Wrong. The correct answer is: " + codeQuiz[currentQuestionIndex].answer;
    count -= 10; // reduce timer by 10 seconds
    feedback.classList.remove('hide');
  }

  // Move to the next question
  currentQuestionIndex++;
  if (currentQuestionIndex >= codeQuiz.length) {
    // End the quiz if we've reached the end of the questions
    end();
  } else {
    // Otherwise, update the UI to display the next question
    questionTitle.innerText = codeQuiz[currentQuestionIndex].question;
    choices.innerHTML = ""; // clear previous choices
    let answers = codeQuiz[currentQuestionIndex].options;
    for (let i = 0; i < answers.length; i++) {
      let answerButton = document.createElement("button");
      choices.appendChild(answerButton);
      answerButton.setAttribute("value", answers[i]);
      answerButton.innerText = answers[i];
      answerButton.addEventListener("click", checkAnswer);
    }
  }
}

// Initialize the first question
let answers = codeQuiz[0].options;
for (let i = 0; i < answers.length; i++) {
  let answerButton = document.createElement("button");
  choices.appendChild(answerButton);
  answerButton.setAttribute("value", answers[i]);
  answerButton.innerText = answers[i];
  answerButton.addEventListener("click", checkAnswer);
}

submit.addEventListener('click', function(event) {
  // code to execute when submit button is clicked
  location.href = "highscores.html";
});

// Final value of count minus any time penalties

finalScore.innerText = 70 - (codeQuiz.length * 10) + count;

