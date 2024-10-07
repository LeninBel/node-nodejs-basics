import { cp, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'url';
import { getDirs } from '../utils/getDirs.js';
import * as path from 'path'

const { filesDir, currentDir } = getDirs(fileURLToPath(import.meta.url));

const DIST_DIR = 'files_copy';
const SOURCE_DIR = 'files';
const distPath = path.resolve(currentDir, `.//${DIST_DIR}`);

const copy = async () => {

    try {
       const dirContent = await readdir(currentDir);
       if(dirContent.indexOf( DIST_DIR) !== -1 || dirContent.indexOf(SOURCE_DIR) === -1) {
        throw new Error('FS operation failed');
       }
      await cp(filesDir, distPath , {recursive: true});
        
    } catch (error) {
        throw new Error(error.message);
    }
};

await copy();
