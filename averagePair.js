function averagePair(array, average) {
  //have pointer at beginning and end
  // if smaller than avg move pointer beginning up
  // if larger than avg move pointer end down
  //if avg is found return true

  // if smaller == larger / exit

  if (array.length == 0) {
    return false;
  }

  let start = 0;
  let end = array.length - 1;

  while (start != end) {
    if ((array[start] + array[end]) / 2 == average) {
      return true;
    } else if ((array[start] + array[end]) / 2 > average) {
      end--;
    } else {
      start++;
    }
  }

  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true

console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true

console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false

console.log(averagePair([], 4)); // false
