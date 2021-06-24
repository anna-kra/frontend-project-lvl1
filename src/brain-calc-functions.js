import { question, greeting } from './cli.js';

const getRandomInt = (max) => Math.floor(Math.random() * max);

const getRandomSymbol = (arrSymbols) => arrSymbols[getRandomInt(arrSymbols.length)];

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

export const isAnswerCorrect = (randomInt1, randomInt2, randomSymbol, answer, userName) => {
  let output = '';

  if (calculate(randomInt1, randomInt2, randomSymbol) === answer) {
    output = 'Correct!';
  } else {
    output = `'${answer}' is wrong answer ;(. Correct answer was ${calculate(randomInt1, randomInt2, randomSymbol)}. Let's try again, ${userName}!`;
  }

  return output;
};

export const brainCalc = () => {
  const userName = greeting();
  let counter = 0;

  for (let i = 1; i <= 3; i += 1) {
    const randomInt1 = getRandomInt(10);
    const randomInt2 = getRandomInt(10);
    const randomSymbol = getRandomSymbol(['+', '-', '*']);

    console.log('What is the result of the expression?');

    console.log(`Question: ${randomInt1} ${randomSymbol} ${randomInt2}`);
    const answer = Number(question('Your answer: '));
    const answerCorrect = isAnswerCorrect(randomInt1, randomInt2, randomSymbol, answer, userName);
    console.log(isAnswerCorrect(randomInt1, randomInt2, randomSymbol, answer, userName));

    if (answerCorrect !== 'Correct!') {
      break;
    } else {
      counter += 1;
    }
  }
  if (counter === 3) {
    console.log(`Congratulations, ${userName}`);
  }
};
