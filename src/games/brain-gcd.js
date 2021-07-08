import getRandomInt from '../common.js';

import {
  getUserAnswer,
  printDirective, printQuestion,
  printCorrect, printNotCorrect, printCongratulations,
  startGame,
} from '../cli.js';

const DIRECTIVE_GCD = 'Find the greatest common divisor of given numbers.';
const MAX_RANDOM_NUMBER = 100;
const GAME_ROUNDS = 3;

const getBiggestCommonDivider = (num1, num2) => {
  const maxOfTwoNumbers = Math.max(num1, num2);
  const limit = Math.round(maxOfTwoNumbers / 2);

  for (let i = limit; i >= 1; i -= 1) {
    if ((num1 % i === 0) && (num2 % i === 0)) {
      return i;
    }
  }

  return 1;
};

const startBrainGcd = () => {
  const userName = startGame();
  printDirective(DIRECTIVE_GCD);

  for (let i = 1; i <= GAME_ROUNDS; i += 1) {
    const rundomInt1 = getRandomInt(MAX_RANDOM_NUMBER);
    const rundomInt2 = getRandomInt(MAX_RANDOM_NUMBER);
    const correctAnswer = getBiggestCommonDivider(rundomInt1, rundomInt2);

    printQuestion([rundomInt1, rundomInt2]);
    const userAnswer = Number(getUserAnswer());

    if (correctAnswer !== userAnswer) {
      printNotCorrect(userAnswer, correctAnswer, userName);
      return false;
    }

    printCorrect();
  }
  printCongratulations(userName);
  return true;
};

export default startBrainGcd;
