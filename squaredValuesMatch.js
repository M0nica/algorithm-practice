//takes in two arrays
function isThisSquared(original, squared) {
  // add each number (squared) to object, increment count
  // and then check for second array that the frequencies are the same

  const frequencies = {};

  if (original.length != squared.length) {
    return false;
  }

  for (number of original) {
    const square = number * number;
    frequencies[square] = frequencies[square]++ || 1;
  }

  for (square of squared) {
    if (frequencies[square]) {
      frequencies[square] = frequencies[square] - 1;
    } else {
      return false;
    }
  }

  return true;
}

console.log(isThisSquared([1, 2, 3], [4, 9, 1])); // true
console.log(isThisSquared([1, 2, 3], [9, 1])); // false
console.log(isThisSquared([1, 2, 1], [4, 4, 1])); // false
