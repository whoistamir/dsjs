class myQueue{
  constructor(){
    this.queue = [];
  }

  print(){
    console.log(this.queue);
  }

  enqueue(val){
    this.queue.push(val);
  }

  dequeue(val){
    this.queue.shift();
  }

  front(){
    return this.queue[0];
  }

  size(){
    return this.queue.length;
  }

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
q.dequeue();
console.log(q.front());
q.print();