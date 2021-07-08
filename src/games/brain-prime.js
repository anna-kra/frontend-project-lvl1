import getRandomInt from '../common.js';

import {
  getUserAnswer,
  printQuestion,
  printNotCorrect,
  greetUser,
} from '../cli.js';

const DIRECTIVE_PRIME = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const GAME_ROUNDS = 3;
const CONGRATULATIONS = 'Congratulations';
const ANSWER_CORRECT = 'Correct!';

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
    const userAnswer = getUserAnswer();
    const correctAnswer = getCorrectAnswer(rundomInt, userAnswer);

    if (correctAnswer !== userAnswer) {
      printNotCorrect(userAnswer, correctAnswer, userName);
      return false;
    }

    console.log(ANSWER_CORRECT);
  }
  console.log(`${CONGRATULATIONS}, ${userName}!`);
  return true;
};

export default startBrainPrime;
