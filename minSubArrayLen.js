function minSubArrayLen(array, target) {
  //find the minimum length where sum > sum passed in

  let min = 0;
  let next = 1;

  while (min > next) {
      if(target[])
    min++;
    next++;
  }
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3]), 7); // 2
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); //2
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); //1
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10]), 39); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10]), 55); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3]), 11); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10]), 95); // 2
