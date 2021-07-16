import readlineSync from 'readline-sync';
import greetUser from './cli.js';

const gameRounds = 3;

const playGame = (directive, genRound) => {
  const userName = greetUser();
  console.log(directive);

  for (let i = 1; i <= gameRounds; i += 1) {
    const [question, answer] = genRound();
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');

    if (answer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'. Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
