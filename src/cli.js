import readlineSync from 'readline-sync';

export const askQuestion = (text) => readlineSync.question(text);

export const printQuestion = (arrParam) => console.log(`Question: ${arrParam.join(' ')}`);

// export const greetUser = () => {
//   console.log('Welcome to the Brain Games!');
//   const userName = askQuestion('May I have your name? ');
//   console.log(`Hello, ${userName}!`);
//   return userName;
// };

// const WELCOME_TEXT = 'Welcome to the Brain Games!';
// const ASC_FOR_NAME = 'May I have your name? ';
// const GREETING_WORD = 'Hello';

// export const greetUser = (welcome_text, asc_for_name, greeting_word) => {
//   console.log(WELCOME_TEXT);
//   const userName = askQuestion(ASC_FOR_NAME);
//   console.log(`${GREETING_WORD}, ${userName}!`);
//   return userName;
// };

// export const greetUser = (welcomeText, ascForName, greetingWord) => {
//   console.log(welcomeText);
//   const userName = askQuestion(ascForName);
//   console.log(`${greetingWord}, ${userName}!`);
//   return userName;
// };

export const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const userName = askQuestion('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};
