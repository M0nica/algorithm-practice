console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60

// function productOfArray(array) {
//   if (array.length == 1) {
//     return array[0];
//   } else {
//     const lastItemPosition = array.length - 1;
//     const lastItem = array[lastItemPosition];
//     array.splice(lastItemPosition, 1);
//     return lastItem * productOfArray(array);
//   }
// }

function productOfArray(array) {
  return array.reduce((acc, number) => acc * number, 1);
}
