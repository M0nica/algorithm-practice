/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.items = [{ item: null, min: null }];
  this.lastItem = function () {
    return this.items[this.items.length - 1];
  };
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  const lastMin = this.lastItem()["min"];
  const min = lastMin == null ? x : Math.min(lastMin, x);

  return this.items.push({ item: x, min: min });
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  return this.items.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.lastItem()["item"];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.lastItem()["min"];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
