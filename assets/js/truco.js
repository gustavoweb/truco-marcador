function incrementScore(scoreId, trophyId, points) {
  var scoreElement = document.getElementById(scoreId);
  var trophyElement = document.getElementById(trophyId);

  var currentScore = parseInt(scoreElement.innerText);
  scoreElement.innerText = currentScore + points;

  if (currentScore + points >= 12) {
      var currentTrophies = parseInt(trophyElement.innerText.split('=')[1].trim());
      trophyElement.innerText = '= ' + (currentTrophies + 1);
      scoreElement.innerText = 0;
  }
}

function incrementScoreWithTrophy(scoreId, trophyId, points) {
  var scoreElement = document.getElementById(scoreId);
  var trophyElement = document.getElementById(trophyId);

  var currentTrophies = parseInt(trophyElement.innerText.split('=')[1].trim());
  trophyElement.innerText = '= ' + (currentTrophies + 1);
  scoreElement.innerText = 0;
}

function decrementScore(scoreId, trophyId) {
  var scoreElement = document.getElementById(scoreId);
  var trophyElement = document.getElementById(trophyId);

  var currentScore = parseInt(scoreElement.innerText);
  if (currentScore > 0) {
      scoreElement.innerText = currentScore - 1;
  } else {
      var currentTrophies = parseInt(trophyElement.innerText.split('=')[1].trim());
      if (currentTrophies > 0) {
          trophyElement.innerText = '= ' + (currentTrophies - 1);
          scoreElement.innerText = 12;
      }
  }
}

function resetScores() {
  document.getElementById('pn').innerText = 0;
  document.getElementById('tn').innerText = '= 0';
  document.getElementById('pe').innerText = 0;
  document.getElementById('te').innerText = '= 0';
}