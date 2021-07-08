import readlineSync from 'readline-sync';

export const question = (text) => readlineSync.question(text);

export const getUserAnswer = () => question('Your answer: ');

export const printDirective = (text) => console.log(text);

export const printNotCorrect = (userAnswer, correctAnswer, userName) => (
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`)
);

export const printQuestion = (arrParam) => console.log(`Question: ${arrParam.join(' ')}`);

export const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const userName = question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};
