import getRandomInt from '../common.js';
import playGame from '../index.js';
import { printQuestion } from '../cli.js';

const DIRECTIVE_PRIME = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const MAX_RANDOM_NUMBER = 200;

const isPrime = (num) => {
  let numIsPrime = true;

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      numIsPrime = false;
      break;
    }
  }

  return numIsPrime;
};

// const getCorrectAnswer = (num, userAnswer) => {
//   let correctAnswer = '';
//   if (isPrime(num) === true && userAnswer === 'yes') {
//     correctAnswer = 'yes';
//   }
//   if (isPrime(num) === false && userAnswer === 'no') {
//     correctAnswer = 'no';
//   }
//   return correctAnswer;
// };

const getCorrectAnswer = (num) => {
  let correctAnswer = '';

  if (isPrime(num)) {
    correctAnswer = 'yes';
  } else if (!isPrime(num)) {
    correctAnswer = 'no';
  }

  return correctAnswer;
};

const playSpecificGame = () => {
  const rundomInt = getRandomInt(MAX_RANDOM_NUMBER);
  printQuestion([rundomInt]);
  const correctAnswer = getCorrectAnswer(rundomInt);
  return correctAnswer;
};

export default () => playGame(DIRECTIVE_PRIME, playSpecificGame);
