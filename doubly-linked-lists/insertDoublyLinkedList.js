class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  set(index, val) {
    let node = this.get(index);

    if (node !== null) {
      node.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index > 0 || index > this.length) return false;

    if (index == 0) return this.unshift(val);

    if (index === this.length) return this.push(val);

    let newNode = new Node(val);
    let prevNode = this.get(index - 1);

    //let afterNode = prevNode.next;

    let nextNode = prevNode.next;
    (prevNode.next = newNode), (newNode.prev = prevNode);
    (newNode.next = nextNode), (nextNode.prev = newNode);

    length++;
    return true;
  }

  get(index) {
    // if index is less than 0
    // or greater or equal to length return null

    // if index is less than or equal to half the length og list

    // index is greather than half the length of the list

    if (index < 0 || index >= this.length) return null;

    let count, current;
    if (index <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count != index) {
        current = current.next;
        count++;
      }
    } else if (index > this.length / 2) {
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  shift() {
    ///if length == 0 return undefined
    // else store oldhead
    // if length is oone, head and tail should be null
    //update the head to be the next of the old head
    // set the head's prev property to null
    // set the old head's next to null

    // decremeent length

    if (this.length === 0) return undefined;

    const oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;

    return oldHead;
  }

  push(val) {
    // create a new node with value passed into the function
    // if the head property === null
    // set the head and tail to be the newly created node

    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // the tail's next should equal newly added node
      this.tail.next = newNode;
      // the newly added node's previous value should equal the tail
      newNode.prev = this.tail;

      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    // if no head return undefined
    // take current tail, store it in variable

    const oldTail = this.tail;
    // if length is 1 set head and tail to null
    // update tail to be the previous node
    // set the newTails.next to null
    // return the old tail

    // the list is empty
    if (!this.head) {
      return undefined;
    } else if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.prev;
      // this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.length--;
    // return this;
    return oldTail;
  }
}

let list = new DoublyLinkedList();

list.push(4);
list.push("Hello");
list.push(42);

list.push(200);
console.log(list.set(0, "Goodbye"));
console.log(list.insert(0, "hoop"));
console.log(list);
