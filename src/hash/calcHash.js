import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'url';
import { getDirs } from '../utils/getDirs.js';
import * as path from 'path'
import * as cr from 'node:crypto';

const { filesDir } = getDirs(fileURLToPath(import.meta.url));
const filePath = path.resolve(filesDir, 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
   const content = await readFile(filePath);
   const hexData = cr.createHash('sha256')
   .update(content)
   .digest('hex');

   console.log(hexData);
};

await calculateHash();