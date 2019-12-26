// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34;

function fibonnaci(number) {
  if (number <= 1) {
    return number;
  } else {
    return fibonnaci(number - 1) + fibonnaci(number - 2);
  }
}
console.log(fibonnaci(0)); // 0
console.log(fibonnaci(1)); //1
console.log(fibonnaci(2)); // 1
console.log(fibonnaci(3)); // 2
console.log(fibonnaci(8)); // 21
console.log(fibonnaci(11)); //89
