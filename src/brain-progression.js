import {
  question, getUserName, printGreeting, printCongratulations, printCorrect,
} from './cli.js';

import { getRandomInt, getIntBetween } from './common-functions.js';

const MAX_START_IN_PROGRESSION = 100;
const MAX_STEP_IN_PROGRESSION = 10;
const MIN_LENGTH_OF_PROGRESSION = 5;
const MAX_LENGTH_OF_PROGRESSION = 10;

const generateProgression = () => {
  const start = getRandomInt(MAX_START_IN_PROGRESSION);
  const step = getRandomInt(MAX_STEP_IN_PROGRESSION);
  const length = getIntBetween(MIN_LENGTH_OF_PROGRESSION, MAX_LENGTH_OF_PROGRESSION);
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }

  return progression;
};

const isAnswerCorrect = (randomPartInProgression, userAnswer) => (
  randomPartInProgression === userAnswer
);

const brainProgression = () => {
  let counter = 0;
  const userName = getUserName();
  printGreeting(userName);
  console.log('What number is missing in the progression?');

  for (let i = 1; i <= 3; i += 1) {
    const progression = generateProgression();
    const randomIndex = getIntBetween(0, progression.length - 1);
    const randomPartInProgression = progression[randomIndex];
    const progressionQuiz = [...progression];
    progressionQuiz[randomIndex] = '..';
    console.log(`Question: ${progressionQuiz.join(' ')}`);
    const userAnswer = Number(question('Your answer: '));
    console.log(userAnswer);

    if (isAnswerCorrect(randomPartInProgression, userAnswer)) {
      printCorrect();
      counter += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${randomPartInProgression}'. Let's try again, ${userName}!`);
      return false;
    }
  }
  if (counter === 3) {
    printCongratulations(userName);
  }
  return true;
};

export default brainProgression;
