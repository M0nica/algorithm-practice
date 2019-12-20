// except base and exponent
// should return the power of the base of the exponent
// don't worry about negative bases and exponents

console.log(power(2, 0)); //1
console.log(power(2, 2)); //4
console.log(power(2, 4)); //16

function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}
