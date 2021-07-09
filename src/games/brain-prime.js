import getRandomInt from '../common.js';
import { greetUser, askQuestion, printQuestion } from '../cli.js';

const DIRECTIVE_PRIME = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const GAME_ROUNDS = 3;
const CONGRATULATIONS = 'Congratulations';
const ANSWER_CORRECT = 'Correct!';
const YOUR_ANSWER = 'Your answer: ';

// const WELCOME_TEXT = 'Welcome to the Brain Games!';
// const ASC_FOR_NAME = 'May I have your name? ';
// const GREETING_WORD = 'Hello';

const MESSAGE_WRONG_ANSWER_PART1 = 'is wrong answer ;(. Correct answer was';
const MESSAGE_WRONG_ANSWER_PART2 = 'Let\'s try again,';

const isPrime = (num) => {
  let numIsPrime = true;

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      numIsPrime = false;
      break;
    }
  }

  return numIsPrime;
};

const getCorrectAnswer = (num, userAnswer) => {
  let correctAnswer = '';
  if (isPrime(num) === true && userAnswer === 'yes') {
    correctAnswer = 'yes';
  }
  if (isPrime(num) === false && userAnswer === 'no') {
    correctAnswer = 'no';
  }
  return correctAnswer;
};

const startBrainPrime = () => {
  const userName = greetUser();
  console.log(DIRECTIVE_PRIME);

  for (let y = 1; y <= GAME_ROUNDS; y += 1) {
    const rundomInt = getRandomInt(200);

    printQuestion([rundomInt]);
    const userAnswer = askQuestion(YOUR_ANSWER);
    const correctAnswer = getCorrectAnswer(rundomInt, userAnswer);

    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' ${MESSAGE_WRONG_ANSWER_PART1} '${correctAnswer}'. ${MESSAGE_WRONG_ANSWER_PART2} ${userName}!`);
      return false;
    }

    console.log(ANSWER_CORRECT);
  }
  console.log(`${CONGRATULATIONS}, ${userName}!`);
  return true;
};

export default startBrainPrime;
