class mySet{
  constructor(){
    this.set = [];
  }

  //Checks for the presence of an element and returns true if the element exists in a set, false if not
  has(val) {
    return this.set.indexOf(val) !== -1;
  }

  //Returns the values within a set
  values(){
    return this.set;
  }

  //Adds a value to a set if it does not already exist
  //Returns true if element was added, false if not
  add(val){
    if(!this.has(val)){
      this.set.push(val);
      return true;
    }
    return false;
  }

  //Removes an element from a set if it exists within it
  //Returns true if element was removed, false if not
  remove(val){
    if(this.has(val)){
      let index = this.set.indexOf(val);
      this.set.splice(index, 1);
      return true;
    }
    return false;
  }

  //Returns the size of the set
  size(){
    return this.set.length();
  }

  //Returns a new set that contains the union of two sets
  // A U B
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

  //Returns a new set that contains the intersection of two sets
  // A U B
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

  //Returns a new set that contains the difference of two sets
  // A U B
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

  //Returns true or false if a set is a proper subset of another set
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
