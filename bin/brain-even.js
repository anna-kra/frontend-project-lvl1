#!/usr/bin/env node
import { question } from '../src/cli.js';
import { getRandomInt, proofAnswerCorrect } from '../src/brain-even-functions.js';

console.log('Welcome to the Brain Games!');
const userName = question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const randomInt = getRandomInt(1000);

console.log(`Question: ${randomInt}`);
// eslint-disable-next-line no-unused-vars
const answer = question('Your answer: ');
console.log(proofAnswerCorrect(randomInt, answer, userName));
