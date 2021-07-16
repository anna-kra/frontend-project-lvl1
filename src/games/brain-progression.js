import getRandomInt from '../common.js';
import playGame from '../index.js';

const directiveProgression = 'What number is missing in the progression?';
const maxStartInProgression = 100;
const maxStepInProgression = 10;
const minLengthOfProgression = 5;
const maxLengthOfProgression = 10;

const getIntBetween = (min, max) => min + Math.floor(Math.random() * (max - min));

const generateProgression = () => {
  const start = getRandomInt(maxStartInProgression);
  const step = getRandomInt(maxStepInProgression);
  const length = getIntBetween(minLengthOfProgression, maxLengthOfProgression);
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }

  return progression;
};

const genRound = () => {
  const progression = generateProgression();
  const randomIndex = getIntBetween(0, progression.length - 1);
  const randomPartInProgression = progression[randomIndex];
  const answer = String(randomPartInProgression);

  const progressionQuiz = [...progression];
  progressionQuiz[randomIndex] = '..';
  const question = progressionQuiz.join(' ');
  return [question, answer];
};

export default () => playGame(directiveProgression, genRound);
