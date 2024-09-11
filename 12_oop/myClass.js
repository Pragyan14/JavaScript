// ES6

class user1{
    constructor(username,password) {
        this.username = username
        this.password = password;
    }

    display(){
        return `${this.username.toUpperCase()} : ${this.password}`;
    }

}

let userFromClass = new user1("pragyan",123);
console.log(userFromClass.display());



// Behind the scene of class

function user2(username,password){
    this.username = username
    this.password = password;
}

user2.prototype.display = function (){
    return `${this.username.toUpperCase()} : ${this.password}`;
}

let userFromFunction = new user2("appu",123);
console.log(userFromFunction.display());