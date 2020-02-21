const [node, path, ...args] = process.argv;
const sum = args.reduce((acc, arg) => acc + parseInt(arg), 0);
console.log(sum);
