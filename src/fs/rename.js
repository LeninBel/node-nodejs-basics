import { rename as fsRename, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'url';
import { getDirs } from '../utils/getDirs.js';
import * as path from 'path'

const { filesDir } = getDirs(fileURLToPath(import.meta.url));
const OLD_FILE = 'wrongFilename.txt';
const NEW_FILE = 'properFilename.md';

const rename = async () => {

    try {
        const dirContent = await readdir(filesDir);
        console.log(dirContent);
        if ((dirContent.indexOf(OLD_FILE) === -1 && dirContent.indexOf(NEW_FILE) === -1) || dirContent.indexOf(NEW_FILE) !== -1) {
            throw new Error('FS operation failed');
        }

        await fsRename(path.resolve(filesDir, `./${OLD_FILE}`), path.resolve(filesDir, `./${NEW_FILE}`));

    } catch (error) {
        throw new Error(error.message);
    }
};

await rename();