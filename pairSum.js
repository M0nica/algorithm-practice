function pairSum(array, target) {
  let low = 0;
  let high = array.length - 1;

  if (array.length == 0) {
    return false;
  }

  while (low !== high) {
    if (array[low] + array[high] === target) {
      return true;
    } else if (array[low] + array[high] < target) {
      low++;
    } else {
      high--;
    }
  }

  return false;
}

console.log(pairSum([1, 3, 5], 8));

console.log(pairSum([1, 4, 5], 8));

console.log(pairSum([], 8));
