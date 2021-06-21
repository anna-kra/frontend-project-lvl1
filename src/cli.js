import readlineSync from 'readline-sync';

export const getText = (text) => text;
export const question = (text) => readlineSync.question(text);
