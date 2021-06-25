import { question, greeting } from './cli.js';
import { getRandomInt, isPrime } from './common-functions.js';

export const isAnswerCorrect = (randomInt, answer, userName) => {
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
  let counter = 0;

  for (let i = 1; i <= 3; i += 1) {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    const randomInt = getRandomInt(1000);

    console.log(`Question: ${randomInt}`);
    const answer = question('Your answer: ');
    const answerCorrect = isAnswerCorrect(randomInt, answer, userName);
    console.log(isAnswerCorrect(randomInt, answer, userName));

    if (answerCorrect !== 'Correct!') {
      break;
    } else {
      counter += 1;
    }
  }
  if (counter === 3) {
    console.log(`Congratulations, ${userName}`);
  }
};
