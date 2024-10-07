import {Transform} from "stream"

const transform = async () => {
    const reverseData = new Transform({
        transform(chunk, encoding, callback) {
          callback(null, [...chunk.toString()].reverse().join("").concat("\n"));
        },
      });
    process.stdin.pipe(reverseData).pipe( process.stdout);
};

await transform();