import {fork} from 'child_process';

import { fileURLToPath } from 'url';
import { getDirs } from '../utils/getDirs.js';
import * as path from 'path'

const { filesDir } = getDirs(fileURLToPath(import.meta.url));
const child_module = path.resolve(filesDir, 'script.js');

const spawnChildProcess = async (args) => {
    fork(child_module, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess([ 1,2,4]);
