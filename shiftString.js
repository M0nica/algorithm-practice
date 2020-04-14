/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function (s, shift) {
  s = s.split("");

  for (const instruction of shift) {
    const [direction, number] = instruction;

    let rounds = 0;
    while (rounds != number) {
      direction == 0 ? s.push(s.shift()) : s.splice(0, 0, s.pop());
      rounds++;
    }
  }

  return s.join("");
};

console.log(
  stringShift("abc", [
    [0, 1],
    [1, 2],
  ])
); //"cab"
console.log(
  stringShift("abcdefg", [
    [1, 1],
    [1, 1],
    [0, 2],
    [1, 3],
  ])
); //"efgabcd"
