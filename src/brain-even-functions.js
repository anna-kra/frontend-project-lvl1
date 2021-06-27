import {
  question, getUserName, printGreeting, printCongratulations, printCorrect, printDirective,
} from './cli.js';

import { getRandomInt, isEven } from './common-functions.js';
import directives from './texts.js';

const MAX_RANDOM_NUMBER = 1000;

const isAnswerCorrect = (randomInt, userAnswer) => isEven(randomInt) === userAnswer;

const brainEven = () => {
  let counter = 0;
  const userName = getUserName();
  printGreeting(userName);
  printDirective(directives, 'even');

  for (let i = 1; i <= 3; i += 1) {
    const randomInt = getRandomInt(MAX_RANDOM_NUMBER);
    console.log(`Question: ${randomInt}`);
    const userAnswer = question('Your answer: ');

    if (isAnswerCorrect(randomInt, userAnswer)) {
      printCorrect();
      counter += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${isEven(randomInt)}'. Let's try again, ${userName}!`);
      return false;
    }
  }
  if (counter === 3) {
    printCongratulations(userName);
  }
  return true;
};

export default brainEven;
