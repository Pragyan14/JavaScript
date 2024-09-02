// forEach loop

let lan = ["c++", "c", "java", "python"];

lan.forEach((value) => {
    console.log(value);
});

function printMe(item) {
    console.log(item);
}

lan.forEach(printMe);

// using forEach we can also get index number and full array

lan.forEach((items, index, arr) => {
  console.log(items, index, arr);
});

let user = [
  { id: 1, name: "pragyan" },
  { id: 2, name: "aaryan" },
  { id: 3, name: "vinayak" },
];

user.forEach((user) => {
  console.log(user);
});
