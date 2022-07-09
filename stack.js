class Stack {
  constructor(){
    this.items = [];
  }
  
  //Returns the length of a stack
  length(){
    return this.items.length;
  }
  
  //Returns true if stack is empty, false if not
  isEmpty(){
    return this.items.length === 0;
  }
  
  //Adds item to the top of a stack
  push(val){
    this.items.push(val);
  }
  
  //Removes item from the top of a stack
  pop(){
   if(this.isEmpty(this.items)){
     return "Underflow"
   } else {
     return this.items.pop();
   }
  }
  
  //Returns item at the top of a stack
  peek(){
    if(this.isEmpty()){
      return -1;
    }
    return this.items[this.items.length - 1];
  }
  
  //Prints stack where top -> bottom = left -> right
  print(){
    let string = '';
    for(let i = 0; i < this.items.length; i++){
      string += `${this.items[i]} `;
    }
    console.log(string);
  }
}

//Tests
let myStack = new Stack();
for(let i = 0; i < 10; i++){
  myStack.push(i);
}
myStack.print();
while(!myStack.isEmpty()){
  console.log(myStack.peek());
  myStack.pop();
}
console.log(myStack.pop());
console.log(myStack.length());
console.log(myStack.isEmpty());