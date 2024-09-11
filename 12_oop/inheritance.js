class parent{
    constructor(parentName) {
        this.parentName = parentName;
    }
}

class child extends parent{
    constructor(parentName,childName) {
        super(parentName);      // calling parent class constructor
        this.childName = childName;
    }
    display(){
        console.log(`Name: ${this.parentName} Parent Name: ${this.childName}`);
    }
}

let c1 = new child("Ram","love");

c1.display();

console.log(c1 instanceof child)    // true
console.log(c1 instanceof parent)   // true