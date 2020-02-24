// Write a function that returns the value at a give path

let testObj = {
  foo: 2,
  bar: "car",
  baz: { x: "xx", y: "yy", biz: { a: 56 } }
};

console.log(getByPath(["baz", "biz", "a"], testObj)); //56

function getByPath(path, object) {
  if (!path) {
    return undefined;
  }
  return path.reduce((acc, value) => {
    return acc[value] || undefined;
  }, object);
}
