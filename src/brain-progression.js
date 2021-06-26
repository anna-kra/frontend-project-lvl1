import { getRandomInt } from './common-functions.js';
import { question, greeting } from './cli.js';

const getIntBetween = (min, max) => min + Math.floor(Math.random() * (max - min));

const generateProgression = () => {
  const startInProgression = getRandomInt(100);
  // Progression can start from 1 till 100 included

  const stepInProgression = getRandomInt(10);
  // The step in progression will be from 1 till 10 included

  const progressionLength = getIntBetween(5, 10);
  // The length of progression must be greater then 5 and shorter then 10

  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(startInProgression + stepInProgression * i);
  }

  return progression;
};

const isAnswerCorrect = (randomPartInProgression, userAnswer) => (
  randomPartInProgression === userAnswer
);

const brainProgression = () => {
  const userName = greeting();
  let counter = 0;
  console.log('What number is missing in the progression?');

  for (let i = 1; i <= 3; i += 1) {
    const progression = generateProgression();
    const randomIndex = getIntBetween(0, progression.length - 1);
    const randomPartInProgression = progression[randomIndex];
    const progressionQuiz = [...progression];
    progressionQuiz[randomIndex] = '...';
    console.log(`Question: ${progressionQuiz}`);
    const userAnswer = Number(question('Your answer: '));
    console.log(userAnswer);

    if (isAnswerCorrect(randomPartInProgression, userAnswer)) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${randomPartInProgression}'. Let's try again, ${userName}!`);
      return false;
    }
  }
  if (counter === 3) {
    console.log(`Congratulations, ${userName}`);
  }
  return true;
};

export default brainProgression;
