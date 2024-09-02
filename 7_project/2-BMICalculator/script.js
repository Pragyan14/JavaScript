const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const h = document.querySelector("#height").value;
  const w = document.querySelector("#weight").value;
  const result = document.querySelector("#results");
  if (h <= 0 || w <= 0) {
    result.innerHTML = "Invalid input";
  } else {
    let bmi = ((w / h / h) * 10000).toFixed(2);
    // result.innerHTML = `Your BMI is ${bmi}`;
    if (bmi < 18.6) {
      result.innerHTML = `Your BMI is ${bmi} and you are under weight`;
      result.style.color = "yellow";
    } else if (bmi < 24.9) {
      result.innerHTML = `Your BMI is ${bmi} and you are fit`;
      result.style.color = "green";
    } else {
      result.innerHTML = `Your BMI is ${bmi} and you are over weight`;
      result.style.color = "red";
    }
  }
});
