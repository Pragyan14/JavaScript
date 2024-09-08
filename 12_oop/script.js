// JavaScript is a prototype-based object-oriented language as it has no classes like other object-oriented languages.
// In ECMAScript 2015, JavaScript debuted the class keyword. JavaScript appears to be an OOP language as a result

const user = {
    userName: "pragyan",
    email:"pragyan@example.com",
    getUserDetail: function (){
        console.log(this);
    }
}

console.log(user.getUserDetail());

function User(username,age){
    this.username = username;
    this.age = age
    this.greeting = function (){
        console.log(`Welcome ${this.username}`);
    }
}

const userOne = new User("Vinayak",20);
const userTwo = new User("Mahimn",20);
console.log(userOne.greeting());
console.log(userTwo);