import { getUserName, printGreeting, printGreetingByName } from '../cli.js';

const startBrainGames = () => {
  printGreeting();
  const userName = getUserName();
  printGreetingByName(userName);
};

export default startBrainGames;
