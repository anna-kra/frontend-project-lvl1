import { getRandomInt } from './common-functions.js';
import { question, greeting } from './cli.js';

const getMinOfTwoNumbers = (num1, num2) => (num1 < num2 ? num1 : num2);

const getBiggestCommonDivider = (num1, num2) => {
  const minOfTwoNumbers = getMinOfTwoNumbers(num1, num2);

  for (let i = minOfTwoNumbers; i >= 1; i -= 1) {
    if ((num1 % i === 0) && (num2 % i === 0)) {
      return i;
    }
  }

  return 1;
};

export const isAnswerCorrect = (num1, num2, answer, userName) => {
  let output = '';

  if (getBiggestCommonDivider(num1, num2) === answer) {
    output = 'Correct!';
  } else {
    output = `'${answer}' is wrong answer ;(. Correct answer was '${getBiggestCommonDivider(num1, num2)}'. Let's try again, ${userName}!`;
  }

  return output;
};

export const brainGcd = () => {
  const userName = greeting();
  let counter = 0;

  for (let i = 1; i <= 3; i += 1) {
    const rundomInt1 = getRandomInt(100);
    const rundomInt2 = getRandomInt(100);

    console.log('Find the greatest common divisor of given numbers.');
    console.log(`Question: ${rundomInt1} ${rundomInt2}`);

    const answer = Number(question('Your answer: '));
    console.log(typeof answer);
    const answerCorrect = isAnswerCorrect(rundomInt1, rundomInt2, answer, userName);

    console.log(isAnswerCorrect(rundomInt1, rundomInt2, answer, userName));

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
