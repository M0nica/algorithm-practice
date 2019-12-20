function reverse(arrayOfChars) {
  // Reverse the input array of characters in place
  // hot
  // toh

  // 012
  // 210

  // SMART
  // 0123
  // 3210

  let i;
  for (i = 0; i < arrayOfChars.length / 2; i++) {
    const originalItem = arrayOfChars[i];
    const inverseIndex = arrayOfChars.length - 1 - i;
    const inverseItem = arrayOfChars[inverseIndex];

    [originalItem, inverseItem] = [inverseItem, originalItem];
  }

  return arrayOfChars;
}

// function reverse(arrayOfChars) {
//   // Reverse the input array of characters in place
//   // hot
//   // toh

//   // 012
//   // 210

//   // SMART
//   // 0123
//   // 3210

//   let i;
//   for (i = 0; i < arrayOfChars.length / 2; i++) {
//     const temp = arrayOfChars[i];
//     arrayOfChars[i] = arrayOfChars[arrayOfChars.length - 1 - i];
//     arrayOfChars[arrayOfChars.length - 1 - i] = temp;
//   }

//   return arrayOfChars;
// }
