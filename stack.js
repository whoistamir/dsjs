class Stack {
  constructor(){
    this.items = [];
  }
  
  length(){
    return this.items.length;
  }
  
  isEmpty(){
    return this.items.length === 0;
  }
  
  push(val){
    this.items.push(val);
  }
  
  pop(){
   if(this.isEmpty(this.items)){
     return "Underflow"
   } else {
     return this.items.pop();
   }
  }
  
  peek(){
    if(this.isEmpty()){
      return -1;
    }
    return this.items[this.items.length - 1];
  }
  
  printStack(){
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
myStack.printStack();
while(!myStack.isEmpty()){
  console.log(myStack.peek());
  myStack.pop();
}
console.log(myStack.pop());
console.log(myStack.length());
console.log(myStack.isEmpty());