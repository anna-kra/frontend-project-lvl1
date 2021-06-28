import { getUserName, printGreeting, printGreetingByName } from './cli.js';

const brainGames = () => {
  printGreeting();
  const userName = getUserName();
  printGreetingByName(userName);
};

export default brainGames;
