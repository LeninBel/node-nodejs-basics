import * as fs from 'node:fs';
import { fileURLToPath } from 'url';
import { getDirs } from '../utils/getDirs.js';
import * as path from 'path'

const { filesDir } = getDirs(fileURLToPath(import.meta.url));
const FILE_NAME = 'fileToRead.txt'
const filePath = path.resolve(filesDir, FILE_NAME);


const read = async () => {
    const readableStream = fs.createReadStream(filePath).setEncoding('utf8');

    let data='';
    readableStream.on('data', (chunk) => {
        data+=chunk;
    });

    readableStream.once('end', () => {
        process.stdout.write(data,  error => {
            if(error){
              console.log(error);
            }
          });
          console.log('');
    });


};

await read();