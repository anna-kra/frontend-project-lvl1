import getRandomInt from '../common.js';
import playGame from '../index.js';
import { printQuestion } from '../cli.js';

const directiveCalc = 'What is the result of the expression?';
const maxRandomNumber = 10;

const getRandomSymbol = (arrSymbols) => arrSymbols[getRandomInt(arrSymbols.length - 1)];

const calculate = (num1, num2, symbol) => {
  switch (symbol) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default: throw new Error('Sorry! This operation is not available.');
  }
};

const genRound = () => {
  const num1 = getRandomInt(maxRandomNumber);
  const num2 = getRandomInt(maxRandomNumber);
  const randomSymbol = getRandomSymbol(['+', '-', '*']);
  const correctAnswer = calculate(num1, num2, randomSymbol);
  printQuestion([num1, randomSymbol, num2]);
  return String(correctAnswer);
};

export default () => playGame(directiveCalc, genRound);
