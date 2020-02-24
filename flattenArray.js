const arr1 = [1, 2, [3, 4]];
console.log(flatten(arr1));
// [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
console.log(flatten(arr2));
// [1, 2, 3, 4, 5, 6]

function flatten(array) {
  return array.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc = acc.concat(flatten(item));
    } else {
      acc.push(item);
    }
    return acc;
  }, []);
}
