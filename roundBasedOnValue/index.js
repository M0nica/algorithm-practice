const conciseRound = (num) => ~~num;
const round = (num) => (num > 0 ? Math.floor(num) : Math.ceil(num));

[1.7, -2.1, 500.4, -369.5, 150, -350].forEach((num) => {
  console.log(conciseRound(num));
  console.log(round(num));
});
