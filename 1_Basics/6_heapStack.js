/* PRIMITIVE (Stack), NON-PREMITIVE (Heap) */

// STACK

let a = 4
let b = a

console.log(b);     // 4

b = 10

console.log(a);     // 4   (Here original value "a" is not changed as a copy of "a" is given to "b")
console.log(b);     // 10


// HEAP (objects and function) mutable


let user1 = {
    fname: "Pragyan",
    age: 20
}

let user2 = user1;

user2.fname = "appu";       // here original value will change as it point to address

console.log(user1.fname);   // appu
console.log(user2.fname);   // appu
