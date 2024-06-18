// console.log("hello");
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    let buttonColor = event.target.id;
    body.style.backgroundColor = `${buttonColor}`;
  });
});
