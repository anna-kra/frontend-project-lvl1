import { question, greeting } from './cli.js';
import { getRandomInt, isPrime } from './common-functions.js';

const isAnswerCorrect = (randomInt, userAnswer, userName) => {
  let output = '';

  if (isPrime(randomInt) === userAnswer) {
    output = 'Correct!';
  } else {
    output = `'${userAnswer}' is wrong answer ;(. Correct answer was '${isPrime(randomInt)}'. Let's try again, ${userName}!`;
  }

  return output;
};

const brainEven = () => {
  const userName = greeting();
  let counter = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 1; i <= 3; i += 1) {
    const randomInt = getRandomInt(1000);

    console.log(`Question: ${randomInt}`);
    const userAnswer = question('Your answer: ');
    const answerCorrect = isAnswerCorrect(randomInt, userAnswer, userName);
    console.log(isAnswerCorrect(randomInt, userAnswer, userName));

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

export default brainEven;
