import readlineSync from 'readline-sync';

export const askQuestion = (text) => readlineSync.question(text);

export const printQuestion = (arrParam) => console.log(`Question: ${arrParam.join(' ')}`);

export const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const userName = askQuestion('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};
