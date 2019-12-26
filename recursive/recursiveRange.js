//add up all the numbers from 0 to the number passed to the function

console.log(recursiveRange(6)); //21
console.log(recursiveRange(10)); //55

function recursiveRange(number) {
  if (number == 1) {
    return 1;
  } else {
    return number + recursiveRange(number - 1);
  }
}
