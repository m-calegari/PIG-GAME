'use strict';

//implementar contador
let diceRandom = 0;
const diceImg = document.querySelector('.dice');
const currentScore = document.querySelector('.current-score');
let current = 0;
const btnRoll = document.querySelector('.btn--roll');
const players = document.querySelectorAll('.player');

const sumCurrentScore = function () {
  current = current + diceRandom;
  currentScore.textContent = current;
  console.log(diceRandom, current);
};

const holdPlayer = function () {};

btnRoll.addEventListener('click', function () {
  diceRandom = Math.trunc(Math.random() * 6) + 1;
  switch (diceRandom) {
    case 1:
      diceImg.src = 'assets/dice-1.png';
      current = 0;
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
