import { getRandomInt } from './common-functions.js';

import {
  question, getUserName,
  printGreeting, printGreetingByName, printDirective, printQuestion,
  printCorrect, printNotCorrect, printCongratulations,
} from './cli.js';

import directives from './texts.js';

const isPrime = (num) => {
  let numIsPrime = 'yes';

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      numIsPrime = 'no';
      break;
    }
  }

  return numIsPrime;
};

const isAnswerCorrect = (num, userAnswer) => (
  (isPrime(num) === 'yes' && userAnswer === 'yes') || (isPrime(num) === 'no' && userAnswer === 'no')
);

const brainPrime = () => {
  let counter = 0;

  printGreeting();
  const userName = getUserName();
  printGreetingByName(userName);
  printDirective(directives, 'prime');

  for (let i = 1; i <= 3; i += 1) {
    const rundomInt = getRandomInt(200);
    const correctAnswer = isPrime(rundomInt);

    printQuestion(rundomInt);
    const userAnswer = question('Your answer: ');

    if (isAnswerCorrect(rundomInt, userAnswer)) {
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

export default brainPrime;
