#!/usr/bin/env node
import { getUserName, printGreeting } from '../src/cli.js';

const userName = getUserName();
printGreeting(userName);
