import getRandomInt from '../common.js';
import playGame from '../index.js';
import { printQuestion } from '../cli.js';

const DIRECTIVE_CALC = 'What is the result of the expression?';
const MAX_RANDOM_NUMBER = 10;

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
  const randomInt1 = getRandomInt(MAX_RANDOM_NUMBER);
  const randomInt2 = getRandomInt(MAX_RANDOM_NUMBER);
  const randomSymbol = getRandomSymbol(['+', '-', '*']);
  const correctAnswer = calculate(randomInt1, randomInt2, randomSymbol);
  printQuestion([randomInt1, randomSymbol, randomInt2]);
  return String(correctAnswer);
};

export default playGame(DIRECTIVE_CALC, playSpecificGame);
