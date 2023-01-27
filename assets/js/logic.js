// Here, we are gettiing the HTML element

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

// We are adding event listener to innitialize the start function when the button in clicked

startButton.addEventListener("click", start);
// start();
function start() {
  startScreen.classList.add("hide");
  questionsBox.classList.remove("hide");
  // On the start, start the timer
}

// How to access the value of the key inside the object
console.log(codeQuiz[0].options);
console.log(codeQuiz[0].question);

//telling to set the text inside h2 to the value I want
questionTitle.innerText = codeQuiz[0].question;

let answers = codeQuiz[0].options;
for (let i = 0; i < answers.length; i++) {
    let answerButton;
  //create button inside

  answerButton = document.createElement("button");
  choices.appendChild(answerButton);
  answerButton.setAttribute("value", answers[i]);
  answerButton.innerText = answers[i];
  answerButton.addEventListener("click", checkAnswer);
}

// Function for checking the correct answer
function checkAnswer(event) {
    console.log('i was clicked')
  //get the value of the button
  let selectedAnswer = event.target.value;

  if (selectedAnswer === codeQuiz[0].answer) {
    console.log("correct answer");
  }
}

// startScreenButton.addEventListener("click", start - screen);
// timeDisplayButton.addEventListener("click", time);
// submitButton.addEventListener("click", submit);
// feedbackButton.addEventListener("click", feedback);
