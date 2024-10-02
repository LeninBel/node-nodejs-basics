
import * as path from 'path'

export const getDirs = (dirName) => {
    const currentDir = path.dirname(dirName);
    const filesDir = path.resolve(currentDir,'.//files');
    return {
        filesDir,
        currentDir
    }
}