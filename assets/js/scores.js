const highscoresList = document.getElementById('highscores');

// get highscores from local storage or set an empty array
let highscores = JSON.parse(localStorage.getItem('highscores')) || [];

// sort highscores in descending order of score
highscores.sort(function (a, b) {
  return b.score - a.score;
});

// function to clear highscores
function clearHighscores() {
  highscores = [];
  localStorage.setItem('highscores', JSON.stringify(highscores));
  highscoresList.innerHTML = '';
}