// A JavaScript function is a block of code designed to perform a particular task.

function calculator(num1, num2) {
  return num1 + num2;
}

console.log(calculator(3, 5)); // 8

// default parameter
let greeting = function (name = "appu") {
  return `Hello ${name}`;
};

console.log(greeting("pragyan"));

// REST operator (always last argument)

function cart(...num) {
  // will return an array with all arguments
  return num;
}

console.log(cart(100, 200, 300, 400));
