const clock = document.getElementById("clock");
// console.log(date);
setInterval(() => {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
