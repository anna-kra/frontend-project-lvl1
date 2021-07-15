import getRandomInt from '../common.js';
import playGame from '../index.js';
import { printQuestion } from '../cli.js';

const directiveEven = 'Answer "yes" if the number is even, otherwise answer "no".';
const maxRandomNumber = 1000;

const isEven = (num) => (num % 2 === 0);

const playSpecificGame = () => {
  const num = getRandomInt(maxRandomNumber);
  printQuestion([num]);
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  return correctAnswer;
};

export default () => playGame(directiveEven, playSpecificGame);
