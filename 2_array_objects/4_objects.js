let user = new Object(); // singleton object

user.id = 123;
user.name = "pragyan";
user.isLoggedIn = true;

let user2 = {
  email: "appu@gmail.com",
  // email: "vimal@gmail.com", // if two key are same so the key that is dealer at last is treated
  fullName: {
    fname: "appu",
    lName: "patidar",
  },
};

let obj1 = { 1: "a", 2: "b" };
let obj2 = { 3: "c", 3: "d" };

let obj3 = Object.assign({}, obj1, obj2); // merge two objects

let obj4 = { ...obj1, ...obj2 }; // spread operator
// console.log(obj4);

console.log(user2);
console.log(Object.keys(user)); // print all the keys of the object
console.log(Object.values(user)); // print all the values of the object

var users = [
  {
    id: 1,
    email: "user1@gmail.com",
  },
  {
    id: 2,
    email: "user2@gmail.com",
  },
  {
    id: 3,
    email: "user3@gmail.com",
  },
];

// object de - structure

let course = {
  courseName: "Placement",
  coursePrice: 999,
  courseInstructor: "God",
};

let { courseInstructor: guide, courseName } = course;

console.log(guide, courseName); // Output : God Placement
