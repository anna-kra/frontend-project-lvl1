import getRandomInt from '../common.js';
import { greetUser, askQuestion, printQuestion } from '../cli.js';

const DIRECTIVE_GCD = 'Find the greatest common divisor of given numbers.';
const MAX_RANDOM_NUMBER = 100;
const GAME_ROUNDS = 3;
const CONGRATULATIONS = 'Congratulations';
const ANSWER_CORRECT = 'Correct!';
const YOUR_ANSWER = 'Your answer: ';

// const WELCOME_TEXT = 'Welcome to the Brain Games!';
// const ASC_FOR_NAME = 'May I have your name? ';
// const GREETING_WORD = 'Hello';

const MESSAGE_WRONG_ANSWER_PART1 = 'is wrong answer ;(. Correct answer was';
const MESSAGE_WRONG_ANSWER_PART2 = 'Let\'s try again,';

const getBiggestCommonDivider = (num1, num2) => {
  const maxOfTwoNumbers = Math.max(num1, num2);
  const limit = Math.round(maxOfTwoNumbers / 2);

  for (let i = limit; i >= 1; i -= 1) {
    if ((num1 % i === 0) && (num2 % i === 0)) {
      return i;
    }
  }

  return 1;
};

const startBrainGcd = () => {
  const userName = greetUser();
  console.log(DIRECTIVE_GCD);

  for (let y = 1; y <= GAME_ROUNDS; y += 1) {
    const rundomInt1 = getRandomInt(MAX_RANDOM_NUMBER);
    const rundomInt2 = getRandomInt(MAX_RANDOM_NUMBER);
    const correctAnswer = getBiggestCommonDivider(rundomInt1, rundomInt2);

    printQuestion([rundomInt1, rundomInt2]);
    const userAnswer = Number(askQuestion(YOUR_ANSWER));

    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' ${MESSAGE_WRONG_ANSWER_PART1} '${correctAnswer}'. ${MESSAGE_WRONG_ANSWER_PART2} ${userName}!`);
      return false;
    }

    console.log(ANSWER_CORRECT);
  }
  console.log(`${CONGRATULATIONS}, ${userName}!`);
  return true;
};

export default startBrainGcd;
