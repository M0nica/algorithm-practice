const http = require("http");
const [node, path, url] = process.argv;

// docs for processing stream of data
// https://nodejs.org/api/http.html#http_http_get_url_options_callback
http
  .get(url, function(response) {
    response.setEncoding("utf8");
    let data = "";
    response.on("data", chunk => {
      data += chunk;
    });
    response.on("error", console.error);
    response.on("end", () => {
      try {
        console.log(data.length);
        console.log(data);
      } catch (e) {
        console.error(e.message);
      }
    });
  })
  .on("error", console.error);
