let number = new Number(578.564);
console.log(number.toFixed(1));      // Round off after decimal

let number2 = 1000000
console.log(number2.toLocaleString("en-IN"));       // Convert nummber into string and puts comma 


console.log(Math.PI);        //  3.141592653589793
console.log(Math.floor(586.55));    // Prints the floor value
console.log(Math.abs(-55));    // Prints absoulte value
console.log(Math.round(5.49));    // prints round value
console.log(Math.ceil(5.9));    //  returns the smallest integer greater than or equal to a given number.


/* IMPORTANT */

console.log(Math.random());     // return random value between 0 to 1
console.log(Math.floor(Math.random() * 10));     // return random value between 0 t0 10  (beacuse we multiply it by 10)
console.log((Math.floor(Math.random() * 10)) + 1);     // to avoid 0, add 1

// Random value in range

let MAX = 100;
let MIN = 105;

console.log(Math.floor(Math.random() * (MAX - MIN + 1 ) + MIN));