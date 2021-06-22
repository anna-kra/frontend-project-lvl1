#!/usr/bin/env node
import { question } from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const userName = question('May I have your name? ');
console.log(`Hello, ${userName}!`);
