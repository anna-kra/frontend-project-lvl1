/* eslint-disable import/prefer-default-export */
export const getRandomInt = (max) => Math.floor(Math.random() * max);

export const isPrime = (num) => ((num % 2 === 0) ? 'yes' : 'no');

export const proofAnswerCorrect = (randomInt, answer, userName) => {
  let output = '';
  if (isPrime(randomInt) === answer) {
    output = 'Correct!';
  } else {
    output = `'${answer}' is wrong answer ;(. Correct answer was '${isPrime(randomInt)}'. Let's try again, ${userName}!`;
  }
  return output;
};
