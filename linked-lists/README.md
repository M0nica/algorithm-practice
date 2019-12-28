# Linked Lists
Class Implementation of Linked List functionality 

```
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
  push(val){
  /* code here */
  }
  pop(){
  /* code here */ 
  }
 }
```

```
var list = new SinglyLinkedList();
```

- push(val) - create a new Node and add it to the end of a LinkedList. The head/tail and length++ values should be updated accordingly. 
- pop() - remove the Tail from LinkedList and update the head/tail and length-- values accordingly. 
- unshift() - add a new Node to the beginning of LinkedList, update the head/tail and length++ accordingly. 
- shift() - remove the head from Linked List and update length-- .
- get(index) - return the value at a specific index in LinkedList. Requires traversing list to find the node. 
- set(index, val) - change the value at a specified index with the appropraite value.
- insert(index, val) - insert new node at the specified index with the appropriate value, should shift the current value at the next index over one. 
- remove (index) - remove node at a specified index 
- print() - print every item in LinkedList 
- reverse() - reverse the items in a LinkedList



