let fname = "pragyan"
let age = 20

console.log("My name is "+fname+ " and my age is "+age);

// String Interpolation
console.log(`My name is ${fname} and my age is ${age}`);

var str = new String("Patidar");
let lName = "    vinayak   "
var str2 = new String("Patidar-Patel-Sharma");
let url = "https://appu.com/pragyan%20patidar"

console.log(str.charAt(3));             // i
console.log(str.slice(0,2));            // Pa
console.log(str.indexOf("d"));          // 4
console.log(lName.trim());              // "vinayak"  (Remove unwanted space from start and end)
console.log(str2.split("-"))            // [ 'Patidar', 'Patel', 'Sharma' ]
console.log(url.replace("%20","-"));    //https://appu.com/pragyan-patidar