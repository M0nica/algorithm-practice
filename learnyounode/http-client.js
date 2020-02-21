// const fs = require("fs");
const http = require("http");

const [node, path, url] = process.argv;

http
  .get(url, function(response) {
    response.setEncoding("utf8");
    response.on("data", function(data) {
      console.log(data);
    });
    response.on("error", console.error);
  })
  .on("error", console.error);
