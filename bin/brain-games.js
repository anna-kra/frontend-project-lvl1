#!/usr/bin/env node
import { greeting, getUserName } from '../src/cli.js';

const userName = getUserName();
greeting(userName);
