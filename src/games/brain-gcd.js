import getRandomInt from '../common.js';
import playGame from '../index.js';

const directiveGcd = 'Find the greatest common divisor of given numbers.';
const maxRandomNumber = 100;

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

const genRound = () => {
  const num1 = getRandomInt(maxRandomNumber);
  const num2 = getRandomInt(maxRandomNumber);
  const answer = String(getBiggestCommonDivider(num1, num2));
  const question = `${num1} ${num2}`;
  return [question, answer];
};

export default () => playGame(directiveGcd, genRound);
