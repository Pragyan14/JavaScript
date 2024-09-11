class user{
    constructor(username,password) {
        this.username = username;
        this.password = password;
    }
    // can not use getter or setter alone
    get password(){
        return this._password.toUpperCase();
    }
    set password(value){
        this._password = value;
    }
}

let userOne = new user("pragyan","adwxaw");
console.log(userOne.password);