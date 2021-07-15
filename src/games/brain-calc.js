import getRandomInt from '../common.js';
import playGame from '../index.js';
import { printQuestion } from '../cli.js';

const directiveCalc = 'What is the result of the expression?';
const maxRandomNumber = 10;

const getRandomOperator = (operators) => operators[getRandomInt(operators.length - 1)];

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
  const randomOperator = getRandomOperator(['+', '-', '*']);
  const correctAnswer = calculate(num1, num2, randomOperator);
  printQuestion([num1, randomOperator, num2]);
  return String(correctAnswer);
};

//test
export default () => playGame(directiveCalc, genRound);
