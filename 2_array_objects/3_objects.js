// objects in JavaScript are instances of Object

let gmail = "appu@gmail.com";

let obj = {
  fname: "pragyan",
  "full name": "Pragyan Patidar",
  surname: "patidar",
  age: 20,
  email: gmail,
  location: ["Rau", "Dhamnod"],
};

// there is two-way to access object elements
console.log(obj.email);
console.log(obj["full name"]); // better way

obj.college = "Medicaps"; // to add new key,value to object

console.log(obj["location"][0]);

//We can also declare function in object
obj.greeting = function () {
  console.log(`Hello ${this.fname}!`);
  return 0;
};

console.log(obj.greeting());
