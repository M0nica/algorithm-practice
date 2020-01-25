// Code CracklePop
// Write a program that prints out the numbers 1 to 100(inclusive).
// If the number is divisible by 3, print Crackle instead of the number.
// If it's divisible by 5, print Pop.
// If it's divisible by both 3 and 5, print CracklePop.You can use any language.

function cracklePop() {
  let count = 0;

  while (count != 101) {
    if (count % 3 == 0 && count % 5 === 0) {
      console.log("CracklePop");
    } else if (count % 3 == 0) {
      console.log("Crackle");
    } else if (count % 5 === 0) {
      console.log("Pop");
    } else {
      console.log(count);
    }
    count++;
  }
}

cracklePop();
