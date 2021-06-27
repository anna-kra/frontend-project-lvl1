export const getRandomInt = (max) => Math.floor(Math.random() * max) + 1;

export const isEven = (num) => ((num % 2 === 0) ? 'yes' : 'no');

export const getIntBetween = (min, max) => min + Math.floor(Math.random() * (max - min));
