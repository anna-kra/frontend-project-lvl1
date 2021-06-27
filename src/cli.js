import readlineSync from 'readline-sync';

export const question = (text) => readlineSync.question(text);

export const getUserName = () => question('May I have your name? ');

export const printGreeting = (userName) => {
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${userName}!`);
};

export const printCongratulations = (userName) => console.log(`Congratulations, ${userName}!`);

export const printCorrect = () => console.log('Correct!');
