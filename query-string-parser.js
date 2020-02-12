/*
  Create a function `parseQueryString` that accepts a query string parameter as an argument, and
  converts it into an object, using the following rules:
    * An equals sign (`=`) separates a *key* on the left from a *value* on the right.
    * An ampersand (`&`) separates key-value pairs from each other.
    * All keys and values should be parsed as Strings.
    * The query string will not contain spaces.
  Here are some example inputs and outputs (mind the edge cases!):
  ```javascript
  parseQueryString("");
  //=> {}
  parseQueryString("a=1");
  //=> {
  //    "a": "1",
  //   }
  parseQueryString("first=alpha&last=omega");
  //=> {
  //    "first": "alpha",
  //    "last": "omega"
  //   }
  parseQueryString("a=apple&b=beet&b=blueberry&c=&d=10");
  //=> {
  //    "a": "apple",
  //    "b": "blueberry",   // "blueberry" overwrites "beet"!
  //    "c": "",            // empty string (missing value)
  //    "d": "10"           // "10" is a String!
  //   }
  ```
  Mega Bonus
  - Can you create the reverse function? Given an object, output a Query Parameter String:
    ``` javascript
    var o = {first: "alpha", last: "omega"};
    convertToQueryParameter(o); // "first=alpha&last=omega";
    ```
*/

function convertToQueryParameter(string) {
  let queryString = "";

  Object.keys(string).forEach(key => {
    if (queryString.length) {
      queryString = `${queryString}&`;
    }
    queryString = `${queryString}${key}=${string[key]}`;
  });

  return queryString;
}

function parseQueryString(string) {
  let queryStringParams = {};

  if (!string.length) {
    return queryStringParams;
  }

  const queryStrings = string.split("&");
  queryStrings
    .map(parameter => parameter.split("="))
    .forEach(([key, value]) => {
      queryStringParams[key] = value;
    });

  return queryStringParams;
}

console.log(parseQueryString(""));
//=> {}
console.log(parseQueryString("a=1"));
//=> {
//    "a": "1",
//   }
console.log(parseQueryString("first=alpha&last=omega"));
//=> {
//    "first": "alpha",
//    "last": "omega"
//   }
console.log(parseQueryString("a=apple&b=beet&b=blueberry&c=&d=10"));
//=> {
//    "a": "apple",
//    "b": "blueberry",   // "blueberry" overwrites "beet"!
//    "c": "",            // empty string (missing value)
//    "d": "10"           // "10" is a String!
//   }

var o = { first: "alpha", last: "omega" };
console.log(convertToQueryParameter(o)); // "first=alpha&last=omega";
