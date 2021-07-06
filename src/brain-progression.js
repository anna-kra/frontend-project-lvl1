import { getRandomInt, getIntBetween } from './common-functions.js';

import {
  getUserName, getUserAnswer,
  printGreeting, printGreetingByName, printDirective, printQuestion,
  printCorrect, printNotCorrect, printCongratulations,
} from './cli.js';

import directives from './texts.js';

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

const startBrainProgression = () => {
  let counter = 0;

  printGreeting();
  const userName = getUserName();
  printGreetingByName(userName);
  printDirective(directives, 'progression');

  for (let i = 1; i <= 3; i += 1) {
    const progression = generateProgression();
    const randomIndex = getIntBetween(0, progression.length - 1);
    const randomPartInProgression = progression[randomIndex];
    const correctAnswer = randomPartInProgression;

    const progressionQuiz = [...progression];
    progressionQuiz[randomIndex] = '..';
    const progressionQuizPresentation = progressionQuiz.join(' ');

    printQuestion([progressionQuizPresentation]);
    const userAnswer = Number(getUserAnswer());

    if (isAnswerCorrect(randomPartInProgression, userAnswer)) {
      printCorrect();
      counter += 1;
    } else {
      printNotCorrect(userAnswer, correctAnswer, userName);
      return false;
    }
  }
  if (counter === 3) {
    printCongratulations(userName);
  }
  return true;
};

export default startBrainProgression;
