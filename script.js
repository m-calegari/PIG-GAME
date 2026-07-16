'use strict';

//implementar timer
let diceRandom = 0;
let score = 0;
let currentScore = 0;

const diceImg = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');

const players = document.querySelectorAll('.player');
let currentPlayer;
const scoreElement = document.querySelectorAll('.score');
let activeScore;
const currentScoreElement = document.querySelectorAll('.current-score');
let activeCurrentScore;
const btnHold = document.querySelector('.btn--hold');

const sumCurrentScore = function () {
  activeCurrentScore = [...currentScoreElement].findIndex(cScore =>
    cScore.classList.contains('current--score--active'),
  );

  currentScore = currentScore + diceRandom;
  currentScoreElement[activeCurrentScore].textContent = currentScore;
};

const holdPlayer = function () {
  currentPlayer = [...players].findIndex(player =>
    player.classList.contains('player--active'),
  );

  console.log(currentPlayer);

  players[currentPlayer].classList.remove('player--active');
  scoreElement[currentPlayer].classList.remove('score--active');
  currentScoreElement[currentPlayer].classList.remove('current--score--active');
  const nextPlayer = (currentPlayer + 1) % players.length;
  players[nextPlayer].classList.add('player--active');
  scoreElement[nextPlayer].classList.add('score--active');
  currentScoreElement[nextPlayer].classList.add('current--score--active');
};

btnRoll.addEventListener('click', function () {
  diceRandom = Math.trunc(Math.random() * 6) + 1;
  switch (diceRandom) {
    case 1:
      diceImg.src = 'assets/dice-1.png';
      // current = 0;
      break;
    case 2:
      diceImg.src = 'assets/dice-2.png';
      break;
    case 3:
      diceImg.src = 'assets/dice-3.png';
    case 4:
      diceImg.src = 'assets/dice-4.png';
      break;
    case 5:
      diceImg.src = 'assets/dice-5.png';
      break;
    case 6:
      diceImg.src = 'assets/dice-6.png';
      break;
  }
  sumCurrentScore();
});

btnHold.addEventListener('click', function () {
  holdPlayer();
});
