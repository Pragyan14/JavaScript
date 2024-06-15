for (let i = 1; i <= 10; i++) {
  if (i == 3) {
    break;
  }
  console.log(i);
}

for (let i = 0; i <= 5; i++) {
  for (let j = 0; j <= i; j++) {
    process.stdout.write("*");
  }
  console.log("");
}
