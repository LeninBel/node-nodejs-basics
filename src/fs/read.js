import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'url';
import { getDirs } from '../utils/getDirs.js';
import * as path from 'path'

const { filesDir } = getDirs(fileURLToPath(import.meta.url));
const filePath = path.resolve(filesDir, 'fileToRead.txt');


const read = async () => {
    try {
        const content = await readFile(filePath, { encoding: 'utf8' });
        console.log(content);
      } catch (error) {
        if(error.message.includes('no such file or directory')) {
            throw new Error('FS operation failed');
        }
        throw new Error(error.message);
      }
};

await read();