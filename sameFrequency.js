// find out if two numbers have the same frequency of digits
// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4410598#overview

function sameFrequency(first, second) {
  first = first.toString();
  second = second.toString();

  if (first.length !== second.length) {
    return false;
  }
  const frequencies = {};
  //for each digit in number, convert to string and then add to object
  for (let digit of first) {
    frequencies[digit] = frequencies[digit]++ || 1;
  }
  // then for second determine if the frequencies are same

  for (let digit of second) {
    if (frequencies[digit]) {
      frequencies[digit] - 1;
    } else {
      return false;
    }
  }

  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
