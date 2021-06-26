import { question, greeting } from './cli.js';
import { getRandomInt, isEven } from './common-functions.js';

const isAnswerCorrect = (randomInt, userAnswer) => isEven(randomInt) === userAnswer;

const brainEven = () => {
  const userName = greeting();
  let counter = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 1; i <= 3; i += 1) {
    const randomInt = getRandomInt(1000);
    console.log(`Question: ${randomInt}`);
    const userAnswer = question('Your answer: ');

    if (isAnswerCorrect(randomInt, userAnswer)) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${isEven(randomInt)}'. Let's try again, ${userName}!`);
      return false;
    }
  }
  if (counter === 3) {
    console.log(`Congratulations, ${userName}`);
  }
  return true;
};

export default brainEven;
