import { getRandomInt } from './common-functions.js';
import { question, getUserName, greeting } from './cli.js';

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

const isAnswerCorrect = (num1, num2, userAnswer) => (
  getBiggestCommonDivider(num1, num2) === userAnswer
);

const brainGcd = () => {
  let counter = 0;
  const userName = getUserName();
  greeting(userName);
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 1; i <= 3; i += 1) {
    const rundomInt1 = getRandomInt(100);
    const rundomInt2 = getRandomInt(100);

    console.log(`Question: ${rundomInt1} ${rundomInt2}`);
    const userAnswer = Number(question('Your answer: '));

    if (isAnswerCorrect(rundomInt1, rundomInt2, userAnswer)) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${getBiggestCommonDivider(rundomInt1, rundomInt2)}'. Let's try again, ${userName}!`);
      return false;
    }
  }

  if (counter === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
  return true;
};

export default brainGcd;
