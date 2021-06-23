import { question, greeting } from './cli.js';

const getRandomInt = (max) => Math.floor(Math.random() * max);

const isPrime = (num) => ((num % 2 === 0) ? 'yes' : 'no');

export const proofAnswerCorrect = (randomInt, answer, userName) => {
  let output = '';
  if (isPrime(randomInt) === answer) {
    output = 'Correct!';
  } else {
    output = `'${answer}' is wrong answer ;(. Correct answer was '${isPrime(randomInt)}'. Let's try again, ${userName}!`;
  }
  return output;
};

export const brainEven = () => {
  const userName = greeting();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const randomInt = getRandomInt(1000);

  console.log(`Question: ${randomInt}`);
  const answer = question('Your answer: ');
  console.log(proofAnswerCorrect(randomInt, answer, userName));
};
