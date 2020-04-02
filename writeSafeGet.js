function safeGet(obj, selectors, defaultValue) {
  if (typeof selectors === "string") {
    selectors = selectors.split(".");
  }

  const selector = selectors.reduce((acc, value) => {
    return acc[value];
  }, obj);

  if (typeof selector !== "undefined") {
    return selector;
  }

  return defaultValue;
}

let obj = {
  location: {
    state: {
      city: false
    }
  },
  hello: {
    firstName: "Monica"
  }
};

console.log(safeGet(obj, ["location", "state", "city"])); //false
console.log(safeGet(obj, "location.state.city")); //false
console.log(safeGet(obj, "name.firstName")); //"Monica"
console.log(safeGet(obj, "name.world", "World")); // "World"
console.log(safeGet(obj, "name.world")); // undefined
