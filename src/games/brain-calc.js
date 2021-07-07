import getRandomInt from '../common.js';

import {
  getUserName, getUserAnswer,
  printGreeting, printGreetingByName, printDirective, printQuestion,
  printCorrect, printNotCorrect, printCongratulations,
} from '../cli.js';

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

const isAnswerCorrect = (randomInt1, randomInt2, randomSymbol, userAnswer) => (
  calculate(randomInt1, randomInt2, randomSymbol) === userAnswer
);

const startBrainCalc = () => {
  let counter = 0;

  printGreeting();
  const userName = getUserName();
  printGreetingByName(userName);
  printDirective(DIRECTIVE_CALC);

  for (let i = 1; i <= 3; i += 1) {
    const randomInt1 = getRandomInt(MAX_RANDOM_NUMBER);
    const randomInt2 = getRandomInt(MAX_RANDOM_NUMBER);
    const randomSymbol = getRandomSymbol(['+', '-', '*']);
    const correctAnswer = calculate(randomInt1, randomInt2, randomSymbol);

    printQuestion([randomInt1, randomSymbol, randomInt2]);
    const userAnswer = Number(getUserAnswer());

    if (isAnswerCorrect(randomInt1, randomInt2, randomSymbol, userAnswer)) {
      printCorrect();
      counter += 1;
    } else {
      printNotCorrect(userAnswer, correctAnswer, userName);
      return false;
    }
  }
  if (counter === 3) {
    printCongratulations(userName);
  }
  return true;
};

export default startBrainCalc;
