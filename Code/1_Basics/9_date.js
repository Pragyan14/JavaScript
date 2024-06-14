// In js date object month start from 0 

let today = new Date();

console.log(today);                     // 2024-06-12T05:29:20.333Z
console.log(today.toString());          // Wed Jun 12 2024 10:59:20 GMT+0530 (India Standard Time)
console.log(today.toDateString());      // Wed Jun 12 2024
console.log(today.toLocaleString('default',{day:"numeric",weekday:"long",year:"numeric"}));      // 12 Wednesday 2024

let currentDay = new Date();
console.log(currentDay.getMonth() + 1); // 6