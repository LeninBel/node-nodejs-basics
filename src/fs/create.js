import { readdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'url';
import { getDirs } from '../utils/getDirs.js';
import * as path from 'path'

const { filesDir } = getDirs(fileURLToPath(import.meta.url));
const FILE_NAME = 'fresh.txt'
const filePath = path.resolve(filesDir, FILE_NAME);

const create = async () => {
    const files = await readdir(filesDir);
    if(files.find(file => file === FILE_NAME)){
        throw new Error('FS operation failed');
    }

    await writeFile(filePath, 'I am fresh and young');
   
};

await create();