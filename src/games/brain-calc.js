import getRandomInt from '../common.js';
import playGame from '../index.js';
import { printQuestion } from '../cli.js';

const directiveCalc = 'What is the result of the expression?';
const maxRandomNumber = 10;

const getRandomSymbol = (arrSymbols) => arrSymbols[getRandomInt(arrSymbols.length - 1)];

const calculate = (num1, num2, symbol) => {
  let result = 0;

  switch (symbol) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default: result = 0;
  }

  return result;
};

const playSpecificGame = () => {
  const randomInt1 = getRandomInt(maxRandomNumber);
  const randomInt2 = getRandomInt(maxRandomNumber);
  const randomSymbol = getRandomSymbol(['+', '-', '*']);
  const correctAnswer = calculate(randomInt1, randomInt2, randomSymbol);
  printQuestion([randomInt1, randomSymbol, randomInt2]);
  return String(correctAnswer);
};

export default () => playGame(directiveCalc, playSpecificGame);
