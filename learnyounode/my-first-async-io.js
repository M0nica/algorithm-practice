const fs = require("fs");

function processFile() {
  const [node, path, file] = process.argv;

  fs.readFile(file, "utf-8", function doneReading(err, fileContent) {
    if (err) {
      return console.log(err);
    }
    const lines = fileContent.split("\n").length - 1;
    console.log(lines);
  });
}

processFile();
