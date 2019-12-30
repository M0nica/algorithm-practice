class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    // add to the end, similar to push
    const newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.size;
  }

  deqeueue() {
    //similar to shift,
    //remove items from list

    if (!this.first) {
      return null;
    }

    if (this.first === this.last) {
      this.last = null;
    }
    let temp = this.first;

    this.first = this.first.next;

    this.size--;

    return temp.value;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let queue = new Queue();

console.log(queue.enqueue("hello"));
console.log(queue.enqueue("bye"));
console.log(queue.deqeueue());
console.log(queue.deqeueue());

console.log(queue.deqeueue());
