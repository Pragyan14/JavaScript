function add(a,b){
    return a+b;
}

add.sum = 10;   // Everything in javascript in object

console.log(add(2,2));  // 4
console.log(add.sum);         // 10
console.log(add.prototype);   // {}


function createUser(username,score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    return this.score++;
}

createUser.prototype.printMe = function(){
    console.log(`Name: ${this.username} and score is ${this.score}`);
}

let userOne = new createUser("pragyan", 25);

userOne.increment();
userOne.printMe();