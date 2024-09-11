function setUser(userName){
    console.log("called");
    this.userName = userName;
}

function createUser(userName,email,password){
    setUser.call(this,userName);   // The call() method of Function instances calls this function with a given this value and arguments provided individually.
    this.email = email;
    this.password = password;
}

let userOne = new createUser("Pragyan","pragyan@example.com",2334141);

console.log(userOne);