#!/usr/bin/env node
import { getText, question } from '../src/cli';

console.log(getText('Welcome to the Brain Games!'));
const userName = question('May I have your name? ');
console.log(`Hello, ${userName}!`);
