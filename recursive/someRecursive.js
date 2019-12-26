// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;

console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8], val => val > 10)); // false

//returns true if a single value in the array returns true from the callback

function someRecursive(array, callback, index) {
  if (!index) {
    return someRecursive(array, callback, array.length - 1);
  } else if (index <= 1) {
    return callback(array[0]) || callback(array[1]);
  } else {
    if (callback(array[index])) {
      return true;
    } else {
      return someRecursive(array, callback, index - 1);
    }
  }
}
