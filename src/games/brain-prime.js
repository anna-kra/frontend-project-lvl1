import getRandomInt from '../common.js';
import playGame from '../index.js';
import { printQuestion } from '../cli.js';

const directivePrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const maxRandomNumber = 200;

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

const playSpecificGame = () => {
  const num = getRandomInt(maxRandomNumber);
  printQuestion([num]);
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  return correctAnswer;
};

export default () => playGame(directivePrime, playSpecificGame);
