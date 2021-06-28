import { getRandomInt, isEven } from './common-functions.js';

import {
  question, getUserName,
  printGreeting, printGreetingByName, printDirective, printQuestion,
  printCorrect, printNotCorrect, printCongratulations,
} from './cli.js';

import directives from './texts.js';

const MAX_RANDOM_NUMBER = 1000;

const isAnswerCorrect = (randomInt, userAnswer) => isEven(randomInt) === userAnswer;

const brainEven = () => {
  let counter = 0;

  printGreeting();
  const userName = getUserName();
  printGreetingByName(userName);
  printDirective(directives, 'even');

  for (let i = 1; i <= 3; i += 1) {
    const randomInt = getRandomInt(MAX_RANDOM_NUMBER);
    const correctAnswer = isEven(randomInt);

    printQuestion(randomInt);
    const userAnswer = question('Your answer: ');

    if (isAnswerCorrect(randomInt, userAnswer)) {
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

export default brainEven;
