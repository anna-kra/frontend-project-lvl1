import {
  question, getUserName, printGreeting, printCongratulations, printCorrect,
} from './cli.js';

import { getRandomInt } from './common-functions.js';

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

const brainCalc = () => {
  let counter = 0;
  const userName = getUserName();
  printGreeting(userName);
  console.log('What is the result of the expression?');

  for (let i = 1; i <= 3; i += 1) {
    const randomInt1 = getRandomInt(10);
    const randomInt2 = getRandomInt(10);
    const randomSymbol = getRandomSymbol(['+', '-', '*']);

    console.log(`Question: ${randomInt1} ${randomSymbol} ${randomInt2}`);
    const userAnswer = Number(question('Your answer: '));

    if (isAnswerCorrect(randomInt1, randomInt2, randomSymbol, userAnswer)) {
      printCorrect();
      counter += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was ${calculate(randomInt1, randomInt2, randomSymbol)}. Let's try again, ${userName}!`);
      return false;
    }
  }
  if (counter === 3) {
    printCongratulations(userName);
  }
  return true;
};

export default brainCalc;
