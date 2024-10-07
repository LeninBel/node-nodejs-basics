import * as fs from 'node:fs'
import { rm } from 'node:fs/promises';
import { fileURLToPath } from 'url';
import { getDirs } from '../utils/getDirs.js';
import * as path from 'path'
import * as zlib from 'node:zlib';

const { filesDir } = getDirs(fileURLToPath(import.meta.url));
const outputFile = path.resolve(filesDir, 'fileToCompress.txt');
const inputFile = path.resolve(filesDir, 'archive.gz');

const decompress = async () => {
    const input = fs.createReadStream(inputFile);
    const output = fs.createWriteStream(outputFile);
    const decompress = zlib.createGunzip();
    input.pipe(decompress).pipe(output);

    await rm(inputFile);
};

await decompress();