import readlineSync from 'readline-sync';

export const question = (text) => readlineSync.question(text);

export const getUserName = () => question('May I have your name? ');

export const printGreetingByName = (userName) => console.log(`Hello, ${userName}!`);

export const printGreeting = () => console.log('Welcome to the Brain Games!');

export const printCongratulations = (userName) => console.log(`Congratulations, ${userName}!`);

export const printCorrect = () => console.log('Correct!');

export const printDirective = (obj, prop) => console.log(obj[prop]);

export const printNotCorrect = (userAnswer, correctAnswer, userName) => (
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`)
);

export const printQuestion = (...param) => console.log(`Question: ${param.join(' ')}`);
