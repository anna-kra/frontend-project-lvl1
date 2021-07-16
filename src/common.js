// const getRandomInt = (max) => Math.floor(Math.random() * max) + 1;
const getRandomInt = (min, max) => min + Math.floor(Math.random() * (max - min));

export default getRandomInt;
