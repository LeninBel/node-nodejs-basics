import { rm, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'url';
import { getDirs } from '../utils/getDirs.js';
import * as path from 'path'

const { filesDir } = getDirs(fileURLToPath(import.meta.url));
const FILE = 'fileToRemove.txt';

const remove = async () => {
    try {
        const dirContent = await readdir(filesDir);
        if (dirContent.indexOf(FILE) === -1) {
            throw new Error('FS operation failed');
        }

        await rm(path.resolve(filesDir, `./${FILE}`));

    } catch (error) {
        throw new Error(error.message);
    }
};

await remove();