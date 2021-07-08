import getRandomInt from '../common.js';

import {
  getUserName, getUserAnswer,
  printGreeting, printGreetingByName, printDirective, printQuestion,
  printCorrect, printNotCorrect, printCongratulations,
} from '../cli.js';

const DIRECTIVE_EVEN = 'Answer "yes" if the number is even, otherwise answer "no".';
const MAX_RANDOM_NUMBER = 1000;
const GAME_ROUNDS = 3;

const isEven = (num) => (num % 2 === 0);

const getAnswerCorrect = (randomInt) => {
  let correctAnswer = '';

  if (isEven(randomInt)) {
    correctAnswer = 'yes';
  } else if (!isEven(randomInt)) {
    correctAnswer = 'no';
  }

  return correctAnswer;
};

const startBrainEven = () => {
  printGreeting();
  const userName = getUserName();
  printGreetingByName(userName);
  printDirective(DIRECTIVE_EVEN);

  for (let i = 1; i <= GAME_ROUNDS; i += 1) {
    const randomInt = getRandomInt(MAX_RANDOM_NUMBER);
    printQuestion([randomInt]);
    const userAnswer = getUserAnswer();
    const correctAnswer = getAnswerCorrect(randomInt, userAnswer);

    if (correctAnswer === userAnswer) {
      printCorrect();
    } else {
      printNotCorrect(userAnswer, correctAnswer, userName);
      return false;
    }

    if (i === 3) {
      printCongratulations(userName);
    }
  }
  return true;
};

export default startBrainEven;
