/* BASIC OPERATIONS */

// console.log( 2 + 3 );
// console.log( 2 * 3 );
// console.log( 2 - 3 );
// console.log( 2 / 3 );
// console.log( 2 % 3 );
// console.log( 2 ** 3 );   // Power operations 2 ki power 3

let num1 = 23;
// console.log(-num1);      // Print negative value

console.log("a" + "b"); // ab
console.log(1 + "2"); // 12
console.log("1" + 2); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + "2" + 2); // 122
console.log(1 + 2 + "2"); // 32

let num = 2;
console.log(++num + 1); // 4
console.log(num++ + 1); // 3

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

console.log("2" > 3); // false

/* == vs === */

// === also check for data type
console.log("1" == 1); // true
console.log("1" === 1); // false
console.log("1" === true); // false
console.log("1" == true); // true

let a = 3;
let b = 4;
console.log(++a == b);

let demo;
console.log(typeof demo);

let s1 = Symbol("pragyan");
let s2 = Symbol("pragyan");

console.log(s1 == s2);  // false
