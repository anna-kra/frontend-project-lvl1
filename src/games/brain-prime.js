import getRandomInt from '../common.js';
import { greetUser, askQuestion, printQuestion } from '../cli.js';

const DIRECTIVE_PRIME = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const GAME_ROUNDS = 3;
const CONGRATULATIONS = 'Congratulations';
const ANSWER_CORRECT = 'Correct!';
const YOUR_ANSWER = 'Your answer: ';

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

  for (let i = 1; i <= GAME_ROUNDS; i += 1) {
    const rundomInt = getRandomInt(200);

    printQuestion([rundomInt]);
    const userAnswer = askQuestion(YOUR_ANSWER);
    const correctAnswer = getCorrectAnswer(rundomInt, userAnswer);

    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`);
      return false;
    }

    console.log(ANSWER_CORRECT);
  }
  console.log(`${CONGRATULATIONS}, ${userName}!`);
  return true;
};

export default startBrainPrime;
