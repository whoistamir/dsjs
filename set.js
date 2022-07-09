class mySet{
  constructor(){
    this.set = [];
  }

  // check for the presence of an element and return true or false
  has(val) {
    return this.set.indexOf(val) !== -1;
  }

  // return values of set
  values(){
    return this.set;
  }

  //adds value to set if it does not already exist
  add(val){
    if(!this.has(val)){
      this.set.push(val);
      return true;
    }
    return false;
  }

  //removes an element from a set
  remove(val){
    if(this.has(val)){
      let index = this.set.indexOf(val);
      this.set.splice(index, 1);
      return true;
    }
    return false;
  }

  //returns the size of the set
  size(){
    return this.set.length();
  }

  union(otherSet){
    let union = new mySet();
    let a = this.values();
    let b = otherSet.values();

    console.log(a, b);

    a.forEach(val => {
      union.add(val);
    });
    b.forEach(val => {
      union.add(val);
    });
    return union;
  }

  intersection(otherSet){
    let intersection = new mySet();
    let a = this.values();

    a.forEach((val) => {
      if(otherSet.has(val)){
        intersection.add(val);
      }
    })
    return intersection;
  }

  difference(otherSet){
    let difference = new mySet();
    let a = this.values();

    a.forEach(val => {
      if(!otherSet.has(val)){
        difference.add(val);
      }
    });
    return difference;
  }

  subset(otherSet){
    let a = this.values();
    return a.every((val) => {
      return otherSet.has(val);
    });
  }
}

//Tests
let aSet = new mySet();
let bSet = new mySet();
aSet.add(1);
aSet.add(2);
aSet.add(3);
aSet.add(4);
aSet.add(5);
console.log(aSet.values());
console.log(aSet.has(5));
console.log(aSet.has(6));
aSet.remove(4);
console.log(aSet.values());
aSet.add(4);
for(let i = 10; i > 4; i--){
  bSet.add(i);
}
console.log(bSet.values());
let cSet = aSet.union(bSet);
console.log(cSet.values());
let dSet = aSet.intersection(bSet);
console.log(dSet.values());
console.log(aSet.difference(bSet).values());
