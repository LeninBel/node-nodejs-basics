import { cp, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'url';
import { getDirs } from '../utils/getDirs.js';
import * as path from 'path'

const { filesDir, currentDir } = getDirs(fileURLToPath(import.meta.url));

const COPY_DIR = 'files_copy';
const copyPath = path.resolve(currentDir, `.//${COPY_DIR}`);

const copy = async () => {

    try {
       const dirContent = await readdir(currentDir);
       if(dirContent.indexOf( 'files_copy') !== -1 || dirContent.indexOf('files') === -1) {
        throw new Error('FS operation failed');
       }
      await cp(filesDir, copyPath , {recursive: true});
        
    } catch (error) {
        throw new Error(error.message);
    }
};

await copy();
