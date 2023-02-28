const highscoresList = document.getElementById("highscores");

// get highscores from local storage or set an empty array
let highscores = JSON.parse(localStorage.getItem("highscores")) || [];

// sort highscores in descending order of score
highscores.sort(function (a, b) {
  return b.score - a.score;
});

// loop through highscores and add them to the list
highscores.forEach(function (score) {
  const liTag = document.createElement("li");
  liTag.textContent = score.initials + " - " + score.score;
  highscoresList.appendChild(liTag);
});

// function for saving highscore
function saveScore() {
  // get value of input box
  let initials = document.getElementById("initials").value.trim();

  // get user's score from localStorage
  let scoreValue = JSON.parse(localStorage.getItem("mostRecentScore"));

  // Code to make sure value wasn't empty
  if (initials !== "" && scoreValue !== null) {
    // format new score object for current user
    let newScore = {
      score: scoreValue,
      initials: initials,
    };

    // save new score to localstorage
    highscores.push(newScore);
    localStorage.setItem("highscores", JSON.stringify(highscores));

    // redirect to highscores page
    window.location.href = "highscores.html";
  }
}

// function to clear highscores
function clearHighscores() {
  highscores = [];
  localStorage.setItem("highscores", JSON.stringify(highscores));
  highscoresList.innerHTML = "";
}

// loop through highscores and add them to the list
let highscoresHTML = "";
highscores.forEach(function (score) {
  highscoresHTML += "<li>" + score.initials + " - " + score.score + "</li>";
});
highscoresList.innerHTML = highscoresHTML;


// add event listener to "Clear Highscores" button
const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clearHighscores);
