import getRandomInt from '../common.js';

import {
  getUserAnswer,
  printQuestion,
  printNotCorrect,
  greetUser,
} from '../cli.js';

const DIRECTIVE_EVEN = 'Answer "yes" if the number is even, otherwise answer "no".';
const MAX_RANDOM_NUMBER = 1000;
const GAME_ROUNDS = 3;
const CONGRATULATIONS = 'Congratulations';
const ANSWER_CORRECT = 'Correct!';

const isEven = (num) => (num % 2 === 0);

const getCorrectAnswer = (randomInt) => {
  let correctAnswer = '';

  if (isEven(randomInt)) {
    correctAnswer = 'yes';
  } else if (!isEven(randomInt)) {
    correctAnswer = 'no';
  }

  return correctAnswer;
};

const startBrainEven = () => {
  const userName = greetUser();
  console.log(DIRECTIVE_EVEN);

  for (let i = 1; i <= GAME_ROUNDS; i += 1) {
    const randomInt = getRandomInt(MAX_RANDOM_NUMBER);
    printQuestion([randomInt]);
    const userAnswer = getUserAnswer();
    const correctAnswer = getCorrectAnswer(randomInt, userAnswer);

    if (correctAnswer !== userAnswer) {
      printNotCorrect(userAnswer, correctAnswer, userName);
      return false;
    }

    console.log(ANSWER_CORRECT);
  }
  console.log(`${CONGRATULATIONS}, ${userName}!`);
  return true;
};

export default startBrainEven;
