function highestProductOf3(arrayOfInts) {
  if (arrayOfInts.length < 3) {
    throw new Error(
      "oops something went wrong. Please try again with a different input."
    );
  }

  const highestAbsoluteValues = arrayOfInts
    .sort((a, b) => Math.abs(a) - Math.abs(b))
    .slice(-3);

  let highestProduct = highestAbsoluteValues.reduce((accumulator, item) => {
    return accumulator * item;
  }, 1);

  if (highestProduct < 0) {
    highestProduct = arrayOfInts
      .sort((a, b) => a - b)
      .slice(-3)
      .reduce((accumulator, item) => {
        return accumulator * item;
      }, 1);
  }

  return highestProduct;
}

console.log(highestProductOf3([1, 2, 3, 4])); // 24
console.log(highestProductOf3([-10, 1, 3, 2, -10])); // 300
