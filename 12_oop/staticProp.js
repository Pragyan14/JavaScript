// static same as java

class parent {
    static amount = 10;

    withdraw(){
        parent.amount--;
    }

    static display(){
        console.log(`Amount is ${parent.amount}`);
    }
}

let p1 = new parent();
let p2 = new parent();
p1.withdraw();
p2.withdraw();


parent.display();
