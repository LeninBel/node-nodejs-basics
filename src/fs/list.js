import { readdir } from 'node:fs/promises';
import { existsSync, statSync } from 'node:fs';
import { fileURLToPath } from 'url';
import { getDirs } from '../utils/getDirs.js';
import * as path from 'path'

const { filesDir } = getDirs(fileURLToPath(import.meta.url));

const list = async () => {
    try {
        if (!existsSync(filesDir)) {
            throw new Error('FS operation failed');
        }

        const dirContent = await readdir(filesDir)
        .then(res => {
          return   res.filter(item => {
                const itemPath = path.resolve(filesDir, `./${item}`);
                return statSync(itemPath).isFile();
            })

        })
            
        console.log(dirContent);


    } catch (error) {
        throw new Error(error.message);
    }
};

await list();