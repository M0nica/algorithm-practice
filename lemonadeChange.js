/**
 * @param {number[]} bills
 * @return {boolean}
 */

// At a lemonade stand, each lemonade costs $5.

// Customers are standing in a queue to buy from you, and order one at
//a time(in the order specified by bills).

// Each customer will only buy one lemonade and pay with either a $5,
//$10, or $20 bill.You must provide the correct change to each customer,
// so that the net transaction is that the customer pays $5.

// Note that you don't have any change in hand at first.

// Return true if and only if you can provide every customer with correct change.

function lemonadeChange(bills) {
  // bill = 5, good to go
  // bill = 10, if 5 then good to go (deduct 5)
  // bill 20 ? if 10 deduct + 1 five, else deduct 5.

  //if any bills are negative return false

  let fives = 0;
  let tens = 0;
  let twenties = 0;

  for (bill of bills) {
    if (bill == 5) {
      fives++;
    } else if (bill == 10) {
      tens++;
      if (fives) {
        fives--;
      } else {
        return false;
      }
    } else if (bill == 20) {
      twenties++;
      if (tens && fives) {
        tens--;
        fives--;
      } else if (fives >= 3) {
        fives = fives - 3;
      } else {
        return false;
      }
    }
  }

  return true;
}

console.log(lemonadeChange([5, 5, 5, 10, 20])); // true
console.log(lemonadeChange([10, 10])); // false
console.log(lemonadeChange([5, 5, 10, 10, 20]));
