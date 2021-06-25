import { getRandomInt } from './common-functions.js';

const getMinOfTwoNumbers = (num1, num2) => (num1 < num2 ? num1 : num2);

const getBiggestCommonDivider = (num1, num2) => {
  const minOfTwoNumbers = getMinOfTwoNumbers(num1, num2);

  for (let i = minOfTwoNumbers; i >= 1; i -= 1) {
    if ((num1 % i === 0) && (num2 % i === 0)) {
      console.log(i);
      return i;
    }
  }

  return 1;
};

export const brainGcd = () => {
  const rundomInt1 = getRandomInt(100);
  const rundomInt2 = getRandomInt(100);
  const biggestCommonDivider = getBiggestCommonDivider(rundomInt1, rundomInt2);
  return biggestCommonDivider;
};

export const test = (x) => x;
