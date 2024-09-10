let heros = ["Ironman","Thor"];

let heroPowers = {
    "Ironman": "suit",
    "Thor" : "Hammer"
}

function testFunc () {
    console.log("This is test function");
}

Array.prototype.arrayPrint = function (){
    console.log("I am array print function");
}

Object.prototype.printMe = function (){
    console.log("I am boss print function");
}

heros.printMe();
heros.arrayPrint();

testFunc.printMe();

heroPowers.printMe();


// Inheritance in JS

let parent = {
    parentName: "Aman"
}

let child = {
    childName: "Arjun",
    // __proto__: parent   // same as extend in java (old method)
}


Object.setPrototypeOf(child,parent);       // new syntax for inheritance

console.log(child.parentName);      // Aman
