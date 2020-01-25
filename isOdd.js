function findOdd(array) {
  let isOdd = new Map();
  for (let item of array) {
    if (isOdd.get(item)) {
      isOdd.set(item, 0);
    } else {
      isOdd.set(item, 1);
    }
  }

  let oddItem;
  const item = isOdd.forEach((value, key) => {
    if (value == 1) {
      oddItem = key;
    }
  });

  return oddItem;
}

console.log(findOdd([1, 2, 2, 1, 3]));
