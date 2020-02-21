const mymodule = require("./mymodule.js");
function processFile() {
  const [node, path, directory, extension] = process.argv;

  mymodule(directory, extension, function doneReading(err, files) {
    if (err) {
      return console.log(err);
    }

    const filteredFiles = files
      .filter(file => file.endsWith("." + extension))
      .forEach(item => console.log(item));
  });
}

processFile();
