import getRandomInt from '../common.js';
import playGame from '../index.js';
import { printQuestion } from '../cli.js';

const directiveEven = 'Answer "yes" if the number is even, otherwise answer "no".';
const maxRandomNumber = 1000;

const isEven = (num) => (num % 2 === 0);

const genRound = () => {
  const num = getRandomInt(maxRandomNumber);
  printQuestion([num]);
  const answer = isEven(num) ? 'yes' : 'no';
  return answer;
};

export default () => playGame(directiveEven, genRound);
