const parseArgs = () => {
   const args = process.argv.reduce((acc, arg, index, argsArr) => {

    if(arg.startsWith('--')) {
        return [...acc, `${arg.substring(2)} is ${argsArr[index+1]}`];
    }
    return acc;
   }, []);

   console.log(args.join(', '));
};

parseArgs();