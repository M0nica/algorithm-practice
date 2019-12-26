function binarySearch(array, target) {
  let max = array.length - 1;
  let min = 0;

  while (max >= min) {
    let guess = Math.floor((max + min) / 2);
    if (array[guess] == target) {
      return guess;
    } else if (array[guess] > target) {
      max = guess - 1;
    } else if (array[guess] < target) {
      min = guess + 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2)); //1

console.log(binarySearch([1, 2, 3, 4, 5], 3)); //2

console.log(binarySearch([1, 2, 3, 4, 5], 5)); //4

console.log(binarySearch([1, 2, 3, 4, 5], 6)); //-1
