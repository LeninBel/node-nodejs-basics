import * as fs from 'node:fs'
import { rm } from 'node:fs/promises';
import { fileURLToPath } from 'url';
import { getDirs } from '../utils/getDirs.js';
import * as path from 'path'
import * as zlib from 'node:zlib';

const { filesDir } = getDirs(fileURLToPath(import.meta.url));
const inputFile = path.resolve(filesDir, 'fileToCompress.txt');
const outputFile = path.resolve(filesDir, 'archive.gz');

const compress = async () => {
    const input = fs.createReadStream(inputFile);
    const output = fs.createWriteStream(outputFile);
    const compress = zlib.createGzip();
    input.pipe(compress).pipe(output);

    await rm(inputFile);
};

await compress();