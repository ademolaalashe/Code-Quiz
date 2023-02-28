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

// loop through highscores and add them to the list
let highscoresHTML = '';
highscores.forEach(function (score) {
  highscoresHTML += '<li>' + score.initials + ' - ' + score.score + '</li>';
});
highscoresList.innerHTML = highscoresHTML;

// add event listener to "Clear Highscores" button
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clearHighscores);