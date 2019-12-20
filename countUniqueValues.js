function countUniqueValues(values) {
  let count = 0;
  for (value in values) {
    if (
      values[value] != values[value - 1] &&
      values[value] != values[value + 1]
    ) {
      count++;
    }
  }
  return count;
}

// console.log(countUniqueValues([])); // 0

// console.log(countUniqueValues([1])); // 1
// console.log(countUniqueValues([1, 1, 2, 3, 4])); //4
// console.log(countUniqueValues([-2, -1, -1, 0, 1])); //4

// can we alter array? if so, let's use pointers!
// function countUniqueValuesWithPointer(values) {
//   let j = 0;

//   if (values.length === 0) {
//     return 0;
//   }

//   for (let value in values) {
//     if (values[value] == values[j]) {
//       values[j] = values[value];
//     } else {
//       j++;
//       values[j] = values[value];
//     }
//   }

//   return j + 1;
// }

function countUniqueValuesWithPointer(array) {
  if (!array || array.length === 0) {
    return 0;
  }

  let pointer = 0;

  for (let number of array) {
    if (number !== array[pointer]) {
      pointer++;
      array[pointer] = number;
    }
  }
  return pointer + 1;
}

console.log(countUniqueValuesWithPointer([])); // 0
console.log(countUniqueValuesWithPointer([1])); // 1

// [1,2,3, 4, xxxx ]  //3

console.log(countUniqueValuesWithPointer([1, 1, 2, 3, 4])); //4
console.log(countUniqueValuesWithPointer([-2, -1, -1, 0, 1])); //4
