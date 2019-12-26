function linearSearch(items, targetValue) {
  // add whatever parameters you deem necessary - good luck!

  for (let item in items) {
    if (items[item] === targetValue) {
      return item;
      //for some reason udemy required parseInt(item) 🤔
    }
  }
  return -1;
}

console.log(linearSearch([100], 100)); //0
console.log(linearSearch([1, 2, 3, 4, 5], 6)); // -1
console.log(linearSearch([10, 15, 20, 25, 30], 15)); // 1
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)); // 5
