/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // use two pointers
  // if don't have stock and slow is greater than fast, buy slow
  // sell when you reach a point where it is no longer increasing there will be the greatest profit

  let slow = 0;
  let fast = 1;
  let total = 0;
  let haveStock = false;

  while (slow !== fast && fast < prices.length) {
    // console.log('initial total ', total)
    // console.log('slow', slow, 'fast', fast)
    if (prices[slow] < prices[fast] && !haveStock) {
      // buy slow
      total = total - prices[slow];
      haveStock = true;
      // console.log('buying', 'new total is ', total)
    } else if (
      prices[slow] > prices[fast] &&
      total + prices[slow] > 0 &&
      haveStock
    ) {
      //sell now
      haveStock = false;
      total = total + prices[slow];

      //  console.log('selling', 'new total is ', total)
    }

    fast++;
    slow++;
  }

  if (haveStock) {
    total = Math.max(total, total + prices[prices.length - 1]);
  }

  return Math.max(total, 0);
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 7
console.log(maxProfit([1, 2, 3, 4, 5])); // 4
// total = 0
// 1,2 - hasStock, total = -1
// 2,3 - !hasStock, total =
