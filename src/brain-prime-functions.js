import { getRandomInt } from './common-functions.js';

import {
  question, getUserName, printGreeting, printCongratulations, printCorrect,
} from './cli.js';

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
  const userName = getUserName();
  printGreeting(userName);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 1; i <= 3; i += 1) {
    const rundomInt = getRandomInt(200);

    console.log(`Question: ${rundomInt}`);
    const userAnswer = question('Your answer: ');

    if (isAnswerCorrect(rundomInt, userAnswer)) {
      printCorrect();
      counter += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${isPrime(rundomInt)}'. Let's try again, ${userName}!`);
      return false;
    }
  }

  if (counter === 3) {
    printCongratulations(userName);
  }
  return true;
};

export default brainPrime;
