class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(val) {
    // this.val = val;
    // this.next = null;
    this.tail = null;
    this.head = null;
    this.length = 0;
  }
  push(val) {
    var node = new Node(val);
    if (this.head === null) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  //update value at specified index
  set(index, val) {
    if (index < 0 || index > this.length - 1) {
      return false;
    }

    if (index == this.length) {
      return this.push(val);
    }

    let count = 0;

    let currentNode = this.head;

    while (count != index) {
      currentNode = currentNode.next;
      count++;
    }

    currentNode.val = val;

    return true;
  }
}

const list = new DoublyLinkedList();

list.push(1);
list.push(2);
list.push(3);

console.log(list.set(0, 100));
console.log(list);

console.log(list.set(2, 500));

console.log(list);
