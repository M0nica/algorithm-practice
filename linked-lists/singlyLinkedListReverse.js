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
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  unshift(val) {
    // have current head
    // set val.next = current head
    // set head to val
    // increase length
    // return val?

    var newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  shift() {
    // have current head
    // set head to current head.next
    //make head.next = null
    //return original head

    // this is constant times always
    // regardless of how big the list is

    if (!this.head) {
      return undefined;
    }

    let oldHead = this.head;

    this.head = this.head.next;
    oldHead.next = null;
    this.length--;

    if (this.length == 0) {
      this.tail = null;
    }

    return oldHead;
  }

  get(index) {
    if (!this.head || index < 0 || index >= this.length) {
      return undefined;
    }

    let current = this.head;
    let count = 0;

    while (count != index) {
      current = current.next;
      count++;
    }
    return current;
  }

  set(index, val) {
    // change the value of a node based on
    // its position in the linked list

    // get index
    // the set index.val to val

    let current = this.get(index);

    if (current) {
      current.val = val;
      return true;
    }

    return false;
  }

  insert(index, val) {
    //inserts a new node at specific position
    if (index > this.length || index < 0) {
      // not valid index!!
      return false;
    }

    if (index == this.length) {
      this.push(val);
      return true;
    } else if (index == 0) {
      this.unshift(val);
      return true;
    }

    const newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return false;
    }

    if (index === 0) {
      // let next = this.head.next;
      // this.head = next;
      // this.length--;
      this.shift();
      return true;
    } else if (index === this.length - 1) {
      // let secondToLast = this.get(length - 2);
      // secondToLast.next = null;
      // this.length--;
      this.pop();
      return true;
    } else {
      let prev = this.get(index - 1);
      prev.next = prev.next.next;
      this.length--;
      return true;
    }
  }
  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }

  reverse() {
    let currentNode = this.head;
    let previousNode = null;
    let nextNode = null;

    while (currentNode) {
      //set temp variable to hold pointer to next
      nextNode = currentNode.next;

      //set the next val to the previous value
      // initially is null as tail points to null.
      currentNode.next = previousNode;

      //then move the currentNode to previous
      // set the node next to the currentNode as the currentNode
      previousNode = currentNode;
      currentNode = nextNode;
    }

    [this.head, this.tail] = [this.tail, this.head];

    return this;
  }

  // traverse() {
  //   let current = this.head;
  //   while (current) {
  //     console.log(current.val);
  //     current = current.next;
  //   }
  // }
}
var list = new SinglyLinkedList();

list.push("HELLO");
list.push("GOODBYE");
list.push("!");

// console.log(list);
console.log(list.print());
console.log(list.reverse());
console.log(list.print());

// console.log(list.traverse());
