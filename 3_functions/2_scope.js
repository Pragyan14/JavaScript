// {} this is scope

// var have global scope that's why avoid it

// let and const have block scope

let b = 14;
if (true) {
  var a = 10;
  let b = 20;
  console.log("INNER: ", b);
}

console.log("OUTER: ", b);
console.log(a);

function one() {
  let userName = "pragyan";

  function two() {
    let userName = "Medicaps";
    console.log(userName);
  }
  two();
}
one();
