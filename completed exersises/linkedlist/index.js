// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null){
    this.data = data;
    this.next = next;
  }

}

class LinkedList {
  constructor(){
    this.head = null;
  }
  insertFirst(data){
    this.head = new Node(data, this.head);
  }
  size(){
    let counter = 0;
    let node = this.head;
    while(node){
      counter++;
      node = node.next;
    }
    return counter;
  }
  getFirst(){
    return this.head;
  }
  getLast(){
    if(!this.head) {
      return null;
    }
    let node = this.head;
    while(node){
      if(!node.next){
        return node;
      }
      node = node.next;
    }
  }
  clear(){
    this.head = null;
  };
  removeFirst(){
    if(!this.head){
      return;
    }
  this.head = this.head.next;
  }
  removeLast(){
    if(!this.head){
      return;
    }
    if(!this.head.next){
      this.head = null
      return;
    }
    let node = this.head.next;
    let previousNode = this.head;
      while(node.next){
        previousNode = node;
        node = node.next;
      }
      previousNode.next = null;
    }
  insertLast(data){
    const last = this.getLast(data);
    if(last){
      last.next = new Node(data);
    }
    else{
      this.head = new Node(data);
    }
  }
  getAt(index){
    let counter = 0;
    let node = this.head;
    while(node){
      if(counter === index){
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;

  }
  removeAt(index){
  if(!this.head){
    return ;
  }
  
  if(index === 0){
    this.head = this.head.next;
    return;
  }
  let prev = this.getAt(index -1);
  if(!prev ||!prev.next){
    return;
  }
  prev.next = prev.next.next;
  }

  insertAt(data, index){
    if(!this.head){
      this.head = new Node(data);
      return this.head;
    }
    if( index === 0){
      this.head = new Node(data, this.head);
      return this.head;
    }
    let prev = this.getAt(index -1) || this.getLast();
    let newNode = new Node(data, prev.next);
    prev.next = newNode;
    return newNode;
  }
  forEach(fn) {
    let node = this.head;
    while(node) {
      fn(node);
      node = node.next;
    }
  }
  *[Symbol.iterator](){
    let node = this.head;
    while(node){
      yield node;
      node = node.next;
    }
  }

}

module.exports = { Node, LinkedList };
