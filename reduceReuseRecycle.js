// https://egghead.io/lessons/javascript-transform-an-array-into-a-single-value-using-reduce

var votes = [
  "angular",
  "angular",
  "react",
  "react",
  "react",
  "angular",
  "ember",
  "react",
  "vanilla"
];

function tallyVotes(array) {
  const totalVotes = {};

  return array.reduce((tally, vote) => {
    if (!tally[vote]) {
      tally[vote] = 1;
    } else {
      tally[vote] = tally[vote] + 1;
    }
    return tally;
  }, totalVotes);
}
console.log(tallyVotes(votes)); // { angular: 3, react: 4, ember: 1, vanilla: 1 }

var data = [1, 2, 3];
function doubledArray(array) {
  return array.reduce((acc, item) => {
    acc.push(item * 2);
    return acc;
  }, []);
}
console.log(data.map(item => item * 2)); // [2,4,6]
console.log(doubledArray(data)); // [2,4,6]

var longData = [1, 2, 3, 4, 5, 6];
function onlyEven() {
  return longData.reduce((acc, item) => {
    if (item % 2 == 0) {
      acc.push(item);
    }
    return acc;
  }, []);
}
console.log(longData.filter(item => item % 2 === 0)); // [2,4,6]
console.log(onlyEven(longData)); // [2,4,6]

var bigData = [];
for (var i = 0; i < 1000000; i++) {
  bigData[i] = i;
}
