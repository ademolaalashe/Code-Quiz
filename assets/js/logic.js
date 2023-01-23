
// Here, we are gettiing the HTML element

const timeDisplay = document.getElementById('time');
const startScreen = document.getElementById('start-screen');
const startButton = document.getElementById('start');
const questionsBox = document.getElementById('questions');
const questionTitle = document.getElementById('question-title');
const choices = document.getElementById('choices');
const endScreen = document.getElementById('end-screen');
const finalScore = document.getElementById('final-score');
const initials = document.getElementById('initials');
const submit = document.getElementById('submit');
const feedback = document.getElementById('feedback');

// We are adding event listener to innitialize the start function when the button in clicked
startButton.addEventListener('click', start);
function start() {
    startScreen.classList.add("hide");
    questionsBox.classList.remove("hide");
    // On the start, start the timer
}

// How to access the value of the key inside the object
console.log(codeQuiz[0].options)
console.log(codeQuiz[0].question)

//telling to set the text inside h2 to the value I want
questionTitle.innerText = codeQuiz[0].question;

let answers = codeQuiz[0].options
let answerButton;
for (let i = 0; i < answers.length; i++) {
//create button inside

answerButton = document.createElement("button");
choices.appendChild(answerButton);
answerButton.setAttribute("value", answers[i]);
answerButton.innerText = answers[i];
}

// Function for checking the correct answer
answerButton.addEventListener('click', checkAnswer);
function checkAnswer(event){

//get the value of the button
let selectedAnswer = event.target.value

if (selectedAnswer === codeQuiz[0].answer) {
    console.log("correct answer");
}

}



















// let score = 0;
// const timeLimit = 60; // time in seconds
// let timeLimit = timeLimit;

// const intervalId = setInterval(() => {
//     timeLeft--;
//     console.log(timeLeft + " seconds remaining");
//     if (timeLeft === 0) {
//         clearInterval(intervalId);
//         alert("Time's up! Your final score is " + score + " out of " + questions.length);       
//     }
// }, 1000);

// for (let i = 0; i <questions.length; i++) {
//     if (timeLeft === 0) {
//         break;
//     }
//     const currentQuestion = questions[i];
//     const userAnswer = prompt(currentQuestion.question + " " + currentQuestion.options.join(", "));
//     if (userAnswer === currentQuestion.answer) {
//         score++;
//     }
// }

// if (timeLeft > 0) {
//     clearInterval(intervalId);
//     alert("Congratulations, you have completed the quiz! Your final score is " + score + " out of " + question.length);
// }