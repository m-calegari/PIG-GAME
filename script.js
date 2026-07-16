'use strict';

//implementar timer
let diceRandom = 0;
let currentScore = 0;

const btnNew = document.querySelector('.btn--new');

const diceImg = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');

const players = document.querySelectorAll('.player');
let currentPlayer = 0;
const findCurrentPlayer = () =>
  [...players].findIndex(player => player.classList.contains('player--active'));
const scoreElement = document.querySelectorAll('.score');
const currentScoreElement = document.querySelectorAll('.current-score');
const btnHold = document.querySelector('.btn--hold');

const holdPlayer = function () {
  currentPlayer = findCurrentPlayer();

  if (diceRandom === 1) {
    currentScoreElement[currentPlayer].textContent = 0;
  } else {
    scoreElement[currentPlayer].textContent =
      Number(scoreElement[currentPlayer].textContent) + currentScore;
    currentScoreElement[currentPlayer].textContent = 0;
  }

  players[currentPlayer].classList.remove('player--active');
  currentPlayer = (currentPlayer + 1) % players.length;
  players[currentPlayer].classList.add('player--active');
  diceRandom = 0;
  currentScore = 0;
};

btnNew.addEventListener('click', function () {
  players[findCurrentPlayer()].classList.remove('player--active');
  players[Math.trunc(Math.random() * players.length)].classList.add(
    'player--active',
  );
  scoreElement.forEach(sc => {
    sc.textContent = 0;
  });
  currentScoreElement.forEach(csc => {
    csc.textContent = 0;
  });
  diceRandom = 0;
  currentScore = 0;
});

btnRoll.addEventListener('click', function () {
  diceRandom = Math.trunc(Math.random() * 6) + 1;
  switch (diceRandom) {
    case 1:
      diceImg.src = 'assets/dice-1.png';
      holdPlayer();
      break;
    case 2:
      diceImg.src = 'assets/dice-2.png';
      break;
    case 3:
      diceImg.src = 'assets/dice-3.png';
      break;
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
  currentScore += diceRandom;
  currentScoreElement[currentPlayer].textContent = currentScore;
  console.log(currentPlayer);
});

btnHold.addEventListener('click', function () {
  holdPlayer();
  console.log(currentPlayer);
});
