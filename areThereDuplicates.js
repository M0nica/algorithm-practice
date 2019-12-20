function areThereDuplicates() {
  const seen = {};
  for (let value of arguments) {
    // use the arguments keyword to access variable number of arguments
    if (!seen[value]) {
      seen[value] = value;
    } else {
      return true;
    }
  }
  return false;
}

// function areThereDuplicates(...values) {
//   const seen = {};
//   for (let value of values) {
//     // use the arguments keyword to access variable number of arguments
//     if (!seen[value]) {
//       seen[value] = value;
//     } else {
//       return true;
//     }
//   }
//   return false;
// }

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); //true
