import getRandomInt from '../common.js';
import playGame from '../index.js';

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
  const answer = String(calculate(num1, num2, randomOperator));
  const question = `${num1} ${randomOperator} ${num2}`;
  return [question, answer];
};
// test

export default () => playGame(directiveCalc, genRound);
