import {Worker} from 'worker_threads';
import * as os from 'os';

import { fileURLToPath } from 'url';
import { getDirs } from '../utils/getDirs.js';
import * as path from 'path'

const { currentDir } = getDirs(fileURLToPath(import.meta.url));
const workerFile = path.resolve(currentDir, 'worker.js');


const performCalculations = async () => {
const cpus = os.cpus().length;
const workers = [];

for (let i =0 ; i< cpus; i++) {
    const pr = new Promise((res, rej)=>{
        const worker = new Worker(workerFile, {workerData: {num: 10 + i}});
        worker.on('message', (result) => {
            res( 
            {
                status: 'resolved',
                data: result
            });
        })
        worker.on("error", () => {
            res( 
                {
                    status: 'error',
                    data: null
                });
         });

    });
    workers.push(pr);
}

 Promise.allSettled(workers).then((results) => results.map(res => res.value)).then(console.log);

};

await performCalculations();