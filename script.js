'use strict';

//implementar timer

// Select element
const diceImg = document.querySelector('.dice');

// Select all the elements with the same class
const players = document.querySelectorAll('.player');
const scoreElement = document.querySelectorAll('.score');
const currentScoreElement = document.querySelectorAll('.current-score');

// Select buttons
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let diceRandom;
let currentScore = 0;
let currentPlayer = 0;

diceImg.style.display = 'none';

const findCurrentPlayer = () =>
  [...players].findIndex(player => player.classList.contains('player--active'));

const switchPlayer = function () {
  currentScoreElement[currentPlayer].textContent = 0;
  currentPlayer = findCurrentPlayer();
  players[currentPlayer].classList.remove('player--active');
  currentPlayer = (currentPlayer + 1) % players.length;
  players[currentPlayer].classList.add('player--active');
  diceRandom = 0;
  currentScore = 0;
};

btnNew.addEventListener('click', function () {
  diceImg.style.display = 'none';
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

//Rolling dice
btnRoll.addEventListener('click', function () {
  // Generates a number from 1 to 6
  diceRandom = Math.trunc(Math.random() * 6) + 1;
  // Display dice
  diceImg.style.display = '';
  diceImg.src = `assets/dice-${diceRandom}.png`;
  // Check for number 1
  if (diceRandom !== 1) {
    // Increase the current score
    currentScore += diceRandom;
    // Passes the value from the variable to the element
    currentScoreElement[currentPlayer].textContent = currentScore;
  } else {
    switchPlayer();
  }
});

btnHold.addEventListener('click', function () {
  scoreElement[currentPlayer].textContent =
    Number(scoreElement[currentPlayer].textContent) + currentScore;
  currentScoreElement[currentPlayer].textContent = 0;

  switchPlayer();
});
