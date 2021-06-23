import readlineSync from 'readline-sync';

export const question = (text) => readlineSync.question(text);

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};
