import getRandomInt from '../common.js';

import {
  getUserAnswer,
  printDirective, printQuestion,
  printCorrect, printNotCorrect, printCongratulations,
  startGame,
} from '../cli.js';

const DIRECTIVE_EVEN = 'Answer "yes" if the number is even, otherwise answer "no".';
const MAX_RANDOM_NUMBER = 1000;
const GAME_ROUNDS = 3;

const isEven = (num) => (num % 2 === 0);

const getCorrectAnswer = (randomInt) => {
  let correctAnswer = '';

  if (isEven(randomInt)) {
    correctAnswer = 'yes';
  } else if (!isEven(randomInt)) {
    correctAnswer = 'no';
  }

  return correctAnswer;
};

const startBrainEven = () => {
  const userName = startGame();
  printDirective(DIRECTIVE_EVEN);

  for (let i = 1; i <= GAME_ROUNDS; i += 1) {
    const randomInt = getRandomInt(MAX_RANDOM_NUMBER);
    printQuestion([randomInt]);
    const userAnswer = getUserAnswer();
    const correctAnswer = getCorrectAnswer(randomInt, userAnswer);

    if (correctAnswer !== userAnswer) {
      printNotCorrect(userAnswer, correctAnswer, userName);
      return false;
    }

    printCorrect();
  }
  printCongratulations(userName);
  return true;
};

export default startBrainEven;
