class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.size = 0;
    this.first = null;
    this.last = null;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    this.size++;
    return this.size;
  }
  pop() {
    if (this.size == 0) {
      return null;
    }

    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;

    return temp.value;
  }
}

const stack = new Stack();

console.log(stack.push("2"));
console.log(stack.push(1000));
console.log(stack.pop());

console.log(stack.pop());

console.log(stack.pop());
