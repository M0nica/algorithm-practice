// piece of data - val
// reference to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
}

// var first = new Node("Hi");
// manual way of adding new nodes without .push() method
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next = new Node("you");

var list = new SinglyLinkedList();
list.push("Hello");
list.push("Goodbye");
list.push("house");
list.push("hi");
console.log(list);

// console.log(first);
// console.log(first.next.next.next);
