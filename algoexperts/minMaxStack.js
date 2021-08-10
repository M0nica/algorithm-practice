//     Write a MinMaxStack class for a Min Max Stack. The class should
//     support:
//     - Pushing and popping values on and off the stack.
//     - Peeking at the value at the top of the stack.
//    -
//       Getting both the minimum and the maximum values in the stack at any given
//       point in time.
//       - All class methods, when considered independently, should run in constant time and with constant space.

// Stack = Last In, First Out,
class MinMaxStack {
  constructor() {
    this.stack = [];
    this.minMaxStack = [{ min: null, max: null }];
  }

  // O(1) time | O(1) space
  peek() {
    return this.stack[this.stack.length - 1];
  }

  // O(1) time | O(1) space
  pop() {
    this.minMaxStack.pop();
    return this.stack.pop();
  }

  // O(1) time | O(1) space
  push(number) {
    // rename current "min" and current "max" to currentMin and currentMax
    const { min: currentMin, max: currentMax } =
      this.minMaxStack[this.minMaxStack.length - 1];

    this.minMaxStack.push({
      min: currentMin !== null ? Math.min(currentMin, number) : number,
      max: currentMax !== null ? Math.max(currentMax, number) : number,
    });
    this.stack.push(number);
  }

  // O(1) time | O(1) space
  getMin() {
    return this.minMaxStack[this.minMaxStack.length - 1].min;
  }

  // O(1) time | O(1) space
  getMax() {
    return this.minMaxStack[this.minMaxStack.length - 1].max;
  }
}

// Do not edit the line below.
exports.MinMaxStack = MinMaxStack;
