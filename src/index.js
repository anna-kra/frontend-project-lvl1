import { greetUser, askQuestion } from './cli.js';

const GAME_ROUNDS = 3;

const playGame = (directive, playSpecificGame) => {
  const userName = greetUser();
  console.log(directive);

  for (let i = 1; i <= GAME_ROUNDS; i += 1) {
    const correctAnswer = playSpecificGame();
    const userAnswer = askQuestion('Your answer: ');

    if ((correctAnswer !== userAnswer) || (correctAnswer === '')) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`);
      return false;
    }

    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
  return true;
};

export default playGame;
