// In js date object month start from 0 

let today = new Date();

console.log(today);                     // 2024-09-02T16:27:39.720Z
console.log(today.toString());          // Mon Sep 02 2024 21:57:39 GMT+0530 (India Standard Time)
console.log(today.toDateString());      // Mon Sep 02 2024
console.log(today.toLocaleString('default',{day:"numeric",weekday:"long",year:"numeric"}));      // 2 Monday 2024

let currentDay = new Date();
console.log(currentDay.getMonth() + 1); // 9