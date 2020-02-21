const fs = require("fs");

function processFile() {
  const [node, path, directory, extension] = process.argv;

  fs.readdir(directory, function doneReading(err, files) {
    if (err) {
      return console.log(err);
    }

    const filteredFiles = files
      .filter(file => file.endsWith("." + extension))
      .forEach(item => console.log(item));
  });
}

processFile();
