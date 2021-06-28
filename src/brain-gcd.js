import { getRandomInt, getMinOfTwoNumbers } from './common-functions.js';

import {
  getUserName, getUserAnswer,
  printGreeting, printGreetingByName, printDirective, printQuestion,
  printCorrect, printNotCorrect, printCongratulations,
} from './cli.js';

import directives from './texts.js';

const MAX_RANDOM_NUMBER = 100;

const getBiggestCommonDivider = (num1, num2) => {
  const minOfTwoNumbers = getMinOfTwoNumbers(num1, num2);

  for (let i = minOfTwoNumbers; i >= 1; i -= 1) {
    if ((num1 % i === 0) && (num2 % i === 0)) {
      return i;
    }
  }

  return 1;
};

const isAnswerCorrect = (num1, num2, userAnswer) => (
  getBiggestCommonDivider(num1, num2) === userAnswer
);

const brainGcd = () => {
  let counter = 0;

  printGreeting();
  const userName = getUserName();
  printGreetingByName(userName);
  printDirective(directives, 'gcd');

  for (let i = 1; i <= 3; i += 1) {
    const rundomInt1 = getRandomInt(MAX_RANDOM_NUMBER);
    const rundomInt2 = getRandomInt(MAX_RANDOM_NUMBER);
    const correctAnswer = getBiggestCommonDivider(rundomInt1, rundomInt2);

    printQuestion([rundomInt1, rundomInt2]);
    // const userAnswer = Number(question('Your answer: '));
    const userAnswer = Number(getUserAnswer());

    if (isAnswerCorrect(rundomInt1, rundomInt2, userAnswer)) {
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

export default brainGcd;
