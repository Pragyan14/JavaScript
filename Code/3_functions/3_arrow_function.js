// THIS
const userName = "pragyan";

let user = {
  userName: "appu",
  price: 999,
  greeting: function (num1) {
    userName: "ram";
    console.log(arguments);
    console.log(`${this.userName}, Welcome`);
  },
};

user.greeting(1, 2, 3, 4, 5);
console.log(this);

// ARROW FUNCTION

const addTwo = (num1, num2) => num1 + num2; // implicit return

const add = (num1, num2) => {
  console.log(arguments);
  return num1 + num2; // explicit return
};

console.log(add(2, 2));
