class PriorityQueue{
  constructor(){
    this.queue = [];
  }

  //Prints a queue
  //(Rightmost item is the front of the queue)
  print(){
    console.log(this.queue);
  }

  //Returns the size of a queue
  size(){
    return this.queue.length;
  }

  //Returns true if a queue is empty, false if not
  isEmpty(){
    return this.queue.length === 0;
  }

  //Adds element to a queue depending on its prioritiy
  //Element = [value, priority]
  enqueue(element){
    if(this.isEmpty() === 0){
      this.queue.push(element);
    } else {
      let added = false;
      for(let i = 0; i < this.queue.length; i++){
        if(element[1] < this.queue[i][1]){ //Checks priorities
          this.queue.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if(!added){
        this.queue.push(element);
      }
    }
  }

  //Removes and returns an element from the beginning of a queue
  dequeue(val){
    let element = this.queue.shift();
    return element[0];
  }

  //Returns the element at the front of a queue
  front(){
    return this.queue[0];
  }
}

//Tests
let pq = new PriorityQueue();
pq.enqueue(['a', 1]);
pq.enqueue(['b', 1]);
pq.enqueue(['c', 1]);
pq.print();
pq.enqueue(['d', 2]);
pq.print();
pq.dequeue();
pq.print();
console.log(pq.size());
console.log(pq.isEmpty());
console.log(pq.front());
