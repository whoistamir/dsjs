class myQueue{
  constructor(){
    this.queue = [];
  }

  //Prints a queue
  print(){
    console.log(this.queue);
  }

  //Adds element to the end of a queue
  enqueue(val){
    this.queue.push(val);
  }

  //Removes an element from the beginning of a queue
  dequeue(val){
    let element = this.queue.shift();
    return element[0];
  }

  //Returns the element at the front of a queue
  front(){
    return this.queue[0];
  }

  //Returns the size of a queue
  size(){
    return this.queue.length;
  }

  //Returns true if a queue is empty, false if not
  isEmpty(){
    return this.size === 0;
  }
}

//Tests
let q = new myQueue();
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
q.print();
let x = q.dequeue();
console.log(x);
console.log(q.front());
q.print();