import readlineSync from 'readline-sync';

export const question = (text) => readlineSync.question(text);

export const getUserName = () => question('May I have your name? ');

export const greeting = (userName) => {
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${userName}!`);
};
