import getRandomInt from '../common.js';
import playGame from '../index.js';
import { printQuestion } from '../cli.js';

const DIRECTIVE_EVEN = 'Answer "yes" if the number is even, otherwise answer "no".';
const MAX_RANDOM_NUMBER = 1000;

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

const playSpecificGame = () => {
  const randomInt = getRandomInt(MAX_RANDOM_NUMBER);
  printQuestion([randomInt]);
  const correctAnswer = getCorrectAnswer(randomInt);
  return correctAnswer;
};

export default playGame(DIRECTIVE_EVEN, playSpecificGame);
