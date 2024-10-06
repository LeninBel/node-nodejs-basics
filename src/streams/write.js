import * as fs from 'node:fs';
import { fileURLToPath } from 'url';
import { getDirs } from '../utils/getDirs.js';
import * as path from 'path'

const { filesDir } = getDirs(fileURLToPath(import.meta.url));
const FILE_NAME = 'fileToWrite.txt'
const filePath = path.resolve(filesDir, FILE_NAME);


const write = async () => {
    let data;

    process.stdin.on("readable", () => {
        data = process.stdin.read();
        if (data !== null) {
          process.stdin.emit("end");
        }
      });
      
    process.stdin.once("end", () => {
        const stream = fs.createWriteStream(filePath);
        stream.write(data, 
            error => {
              if(error){
                console.log(error);
              }
            });
      });
};

await write();