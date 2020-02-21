const fs = require("fs");

module.exports = function processFile(directory, extension, callback) {
  fs.readdir(directory, callback);
};
