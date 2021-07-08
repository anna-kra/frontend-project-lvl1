import getRandomInt from '../common.js';

import {
  printQuestion,
  greetUser,
  askQuestion,
} from '../cli.js';

const DIRECTIVE_EVEN = 'Answer "yes" if the number is even, otherwise answer "no".';
const MAX_RANDOM_NUMBER = 1000;
const GAME_ROUNDS = 3;
const CONGRATULATIONS = 'Congratulations';
const ANSWER_CORRECT = 'Correct!';
const YOUR_ANSWER = 'Your answer: ';

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
    const userAnswer = askQuestion(YOUR_ANSWER);
    const correctAnswer = getCorrectAnswer(randomInt, userAnswer);

    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`);
      return false;
    }

    console.log(ANSWER_CORRECT);
  }
  console.log(`${CONGRATULATIONS}, ${userName}!`);
  return true;
};

export default startBrainEven;
