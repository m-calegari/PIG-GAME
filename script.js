'use strict';

//implementar add more players

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

// Declaration of variables
let diceRandom;
let currentScore = 0;
let currentPlayer = 0;

// Hidden the dice before game starts
diceImg.style.display = 'none';

// Find the index of the current player container
const findCurrentPlayer = () =>
  [...players].findIndex(player => player.classList.contains('player--active'));

// Function to switch players
const switchPlayer = function () {
  // Reset to zero the current score of the current player
  currentScoreElement[currentPlayer].textContent = 0;
  // Put the index of the current player inside a variable
  currentPlayer = findCurrentPlayer();
  // Remove the class 'player--active' from current player
  players[currentPlayer].classList.remove('player--active');
  // Calc the next index to add the class 'player--active'
  currentPlayer = (currentPlayer + 1) % players.length;
  players[currentPlayer].classList.add('player--active');
  currentScore = 0;
};

// Button to reset the game
btnNew.addEventListener('click', function () {
  // Hidden the dice
  diceImg.style.display = 'none';
  // Remove the class 'player--active' from the current player
  players[findCurrentPlayer()].classList.remove('player--active');
  // Add the class 'player--active' randomly
  players[Math.trunc(Math.random() * players.length)].classList.add(
    'player--active',
  );
  // Remove class 'player--winner'
  players[currentPlayer].classList.remove('player--winner');
  // Set 0 at all score elements
  scoreElement.forEach(sc => {
    sc.textContent = 0;
  });
  // Set 0 at all current score elements
  currentScoreElement.forEach(csc => {
    csc.textContent = 0;
  });
  currentScore = 0;
  btnRoll.disabled = false;
  btnHold.disabled = false;
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
    // Call function
    switchPlayer();
  }
});

// Button to switch player and increase the score
btnHold.addEventListener('click', function () {
  // Select the current player and increase it score
  scoreElement[currentPlayer].textContent =
    Number(scoreElement[currentPlayer].textContent) + currentScore;
  // Set the current score of the current player to 0
  currentScoreElement[currentPlayer].textContent = 0;
  // Player win if its score is 100 or more
  if (Number(scoreElement[currentPlayer].textContent) >= 20) {
    players[currentPlayer].classList.add('player--winner');
    btnRoll.disabled = true;
    btnHold.disabled = true;
  } else {
    // Call function
    switchPlayer();
  }
});
