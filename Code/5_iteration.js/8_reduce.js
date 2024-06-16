const numbers = [1, 2, 3, 4];

let total = numbers.reduce(function (acc, currentValue) {
  return acc + currentValue;
}, 0);

let arrowTotal = numbers.reduce((acc, cuurentValue) => acc + cuurentValue, 0);

console.log(arrowTotal);

const courseCart = [
  {
    courseName: "DSA",
    price: 5,
  },
  {
    courseName: "C++",
    price: 5,
  },
  {
    courseName: "Java",
    price: 5,
  },
  {
    courseName: "Python",
    price: 5,
  },
];

let cartTotal = courseCart.reduce(
  (acc, currentValue) => acc + currentValue.price,
  0
);

console.log(cartTotal);
