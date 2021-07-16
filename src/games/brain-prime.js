import getRandomInt from '../common.js';
import playGame from '../index.js';

const directivePrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const maxRandomNumber = 200;

const isPrime = (num) => {
  if (num < 2) { return false; }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const genRound = () => {
  const num = getRandomInt(maxRandomNumber);
  const question = num;
  const answer = isPrime(num) ? 'yes' : 'no';
  return [question, answer];
};

export default () => playGame(directivePrime, genRound);
