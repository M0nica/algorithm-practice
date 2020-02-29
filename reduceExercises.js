// https://coursework.vschool.io/array-reduce-exercises/
function total(arr) {
  return arr.reduce((acc, value) => acc + value, 0);
}

console.log(total([1, 2, 3])); // 6

function stringConcat(arr) {
  return arr.reduce((acc, value) => acc + value, "");
}

console.log(stringConcat([1, 2, 3])); // "123"

function totalVotes(arr) {
  return arr.reduce((acc, person) => {
    if (person.voted) {
      acc++;
    }
    return acc;
  }, 0);
}
// solved without using reduce:
// function totalVotes(arr) {
//   return arr.filter(person => person.voted).length;
// }

var voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false }
];
console.log(totalVotes(voters)); // 7

function shoppingSpree(arr) {
  return arr.reduce((acc, item) => acc + item.price, 0);
}

var wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist)); // 227005

function flatten(arr) {
  return arr.reduce((acc, item) => acc.concat(item), []);
}

var arrays = [["1", "2", "3"], [true], [4, 5, 6]];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

var voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false }
];

function voterResults(arr) {
  // Include how many of the potential voters were in the ages 18-25,
  // how many from 26-35, how many from 36-55,
  //and how many of each of those age ranges actually voted.
  //The resulting object containing this data should have 6 properties.
  // See the example output at the bottom.

  const initialVotes = {
    youngVotes: 0,
    youth: 0,
    midVotes: 0,
    mids: 0,
    oldVotes: 0,
    olds: 0
  };
  return arr.reduce((acc, voter) => {
    let peers;
    if (voter.age < 26) {
      peers = "youth";
    } else if (voter.age < 36) {
      peers = "mids";
    } else {
      peers = "olds";
    }
    // console.log(acc);
    if (!voter.voted) {
      return { ...acc, [peers]: acc[peers] + 1 };
    } else {
      let votePeers;

      if (peers === "youth") {
        votePeers = "youngVotes";
      } else if (peers === "mids") {
        votePeers = "midVotes";
      } else {
        votePeers = "oldVotes";
      }
      return {
        ...acc,
        [peers]: acc[peers] + 1,
        [votePeers]: acc[votePeers] + 1
      };
    }
  }, initialVotes);
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ youngVotes: 1,
  youth: 4,
  midVotes: 3,
  mids: 4,
  oldVotes: 3,
  olds: 4 
}
*/

/* calculator exercise*/

function calculator(operations, initialValue) {
  return operations.reduce((acc, { type, value }) => {
    // if (type == "Add") {
    //   return acc + value;
    // } else if (type == "Multiply") {
    //   return acc * value;
    // } else if (type == "Divide") {
    //   return acc / value;
    // } else if (type == "Subtract") {
    //   return acc - value;
    // }

    switch (type) {
      case "Add":
        return acc + value;
      case "Multiply":
        return acc * value;
      case "Subtract":
        return acc - value;
      case "Divide":
        return acc / value;
      default:
        return acc;
    }
  }, initialValue);
}
let operations = [
  { type: "Add", value: 4 },
  { type: "Multiply", value: 3 },
  { type: "Divide", value: 2 },
  { type: "Subtract", value: 3 }
];
console.log(calculator(operations, 6)); // 12
