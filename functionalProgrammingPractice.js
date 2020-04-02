// https://scotch.io/bar-talk/code-challenge-11-javascript-functional-programming
// ARRAY 1
const texasss = [
  {
    name: "Mike",
    age: 23,
    gender: "m",
    us: false
  },
  {
    name: "Liz",
    age: 20,
    gender: "f",
    us: true
  },
  {
    name: "Chris",
    age: 102,
    gender: "m",
    us: true
  },
  {
    name: "Chuloo",
    age: 27,
    gender: "m",
    us: false
  },
  {
    name: "Annie",
    age: 30,
    gender: "f",
    us: true
  }
];

// Part 1 - Find all users older than 24
console.log(texasss.filter(user => user.age > 24));
// Part 2 - Find the total age of all users
console.log(texasss.reduce((acc, user) => acc + parseInt(user.age), 0));
// Part 3 - List all female coders
console.log(texasss.filter(coder => coder.gender == "f"));
// ARRAY 2
const newieyork = [
  {
    name: "Michelle",
    age: 19,
    coder: true,
    gender: "f",
    us: true
  },
  {
    name: "Sam",
    age: 25,
    coder: false,
    gender: "m",
    us: false
  },
  {
    name: "Ivy",
    age: 26,
    coder: true,
    gender: "f",
    us: false
  },
  {
    name: "Nick",
    age: 32,
    coder: true,
    gender: "m",
    us: true
  },
  {
    name: "Jim Beglin",
    age: 65,
    coder: false,
    gender: "m",
    us: true
  }
];

// Part 1 - List all users in US in ascending order
console.log(newieyork.filter(user => user.us).sort());
// Part 2 - Sort all users by age
console.log(newieyork.sort((a, b) => a.age - b.age));
// Part 3 -  List all female coders
console.log(newieyork.filter(user => user.gender == "f"));
// ARRAY 3
const vegzas = [
  {
    name: "Charly",
    age: 32,
    coder: true,
    gender: "m"
  },
  {
    name: "Law",
    age: 21,
    coder: true,
    gender: "m"
  },
  {
    name: "Rosey",
    age: 42,
    coder: false,
    gender: "f"
  },
  {
    name: "Steph",
    age: 18,
    coder: true,
    gender: "f"
  },
  {
    name: "Jon",
    age: 47,
    coder: false,
    gender: "m"
  }
];

// Part 1 - Find the total age of male coders under 25
console.log(
  vegzas
    .filter(coder => coder.age < 25 && coder.gender == "m")
    .reduce((acc, coder) => acc + coder.age, 0)
);
// Part 2 - List all male coders over 30
console.log(vegzas.filter(coder => coder.age > 30 && coder.gender == "m"));
// Part 3 - Find the total age of everyone in texasss, newieyork and vegzas combined.
console.log(
  vegzas
    .concat(newieyork)
    .concat(texasss)
    .reduce((acc, user) => acc + user.age, 0)
);
