import readlineSync from 'readline-sync';

export const question = (text) => readlineSync.question(text);
export const getText = (text) => text;
