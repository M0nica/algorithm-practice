// const fs = require("fs");

// const [node, path, file] = process.argv;

// const fileContent = fs.readFileSync(file).toString();

// console.log(fileContent.split("\n").length - 1);

const fs = require("fs");

const [node, path, file] = process.argv;

const fileContent = fs.readFileSync(file, "utf-8");

console.log(fileContent.split("\n").length - 1);
