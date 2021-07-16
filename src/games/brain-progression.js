import getRandomInt from '../common.js';
import playGame from '../index.js';

const directiveProgression = 'What number is missing in the progression?';
const maxStartInProgression = 100;
const maxStepInProgression = 10;
const minLengthOfProgression = 5;
const maxLengthOfProgression = 10;

const generateProgression = () => {
  const start = getRandomInt(1, maxStartInProgression);
  const step = getRandomInt(1, maxStepInProgression);
  const length = getRandomInt(minLengthOfProgression, maxLengthOfProgression);
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }

  return progression;
};

const genRound = () => {
  const progression = generateProgression();
  const randomIndex = getRandomInt(0, progression.length - 1);
  const randomPartInProgression = progression[randomIndex];
  const answer = String(randomPartInProgression);

  const progressionQuiz = [...progression];
  progressionQuiz[randomIndex] = '..';
  const question = progressionQuiz.join(' ');
  return [question, answer];
};

export default () => playGame(directiveProgression, genRound);
