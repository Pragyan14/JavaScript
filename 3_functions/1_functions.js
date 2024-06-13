// A JavaScript function is a block of code designed to perform a particular task.

function calculater(num1, num2) {
  return num1 + num2;
}

// console.log(calculater(3, 5));

// default paramatere
let greeeting = function (name = "appu") {
  return `Hello ${name}`;
};

// console.log(greeeting("pragyan"));

// REST operator

function cart(...num) {
  // will return a array with all arguments
  return num;
}

console.log(cart(100, 200, 300, 400));
