import getRandomInt from '../common.js';
import { greetUser, askQuestion, printQuestion } from '../cli.js';

const DIRECTIVE_CALC = 'What is the result of the expression?';
const MAX_RANDOM_NUMBER = 10;
const GAME_ROUNDS = 3;
const CONGRATULATIONS = 'Congratulations';
const ANSWER_CORRECT = 'Correct!';
const YOUR_ANSWER = 'Your answer: ';

const WELCOME_TEXT = 'Welcome to the Brain Games!';
const ASC_FOR_NAME = 'May I have your name? ';
const GREETING_WORD = 'Hello';

const MESSAGE_WRONG_ANSWER_PART1 = 'is wrong answer ;(. Correct answer was';
const MESSAGE_WRONG_ANSWER_PART2 = 'Let\'s try again,';

const getRandomSymbol = (arrSymbols) => arrSymbols[getRandomInt(arrSymbols.length - 1)];

const calculate = (num1, num2, symbol) => {
  let result = 0;

  switch (symbol) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default: result = 0;
  }

  return result;
};

const startBrainCalc = () => {
  const userName = greetUser(WELCOME_TEXT, ASC_FOR_NAME, GREETING_WORD);
  console.log(DIRECTIVE_CALC);

  for (let i = 1; i <= GAME_ROUNDS; i += 1) {
    const randomInt1 = getRandomInt(MAX_RANDOM_NUMBER);
    const randomInt2 = getRandomInt(MAX_RANDOM_NUMBER);
    const randomSymbol = getRandomSymbol(['+', '-', '*']);
    const correctAnswer = calculate(randomInt1, randomInt2, randomSymbol);

    printQuestion([randomInt1, randomSymbol, randomInt2]);
    const userAnswer = Number(askQuestion(YOUR_ANSWER));

    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' ${MESSAGE_WRONG_ANSWER_PART1} '${correctAnswer}'. ${MESSAGE_WRONG_ANSWER_PART2} ${userName}!`);
      return false;
    }

    console.log(ANSWER_CORRECT);
  }

  console.log(`${CONGRATULATIONS}, ${userName}!`);
  return true;
};

export default startBrainCalc;
