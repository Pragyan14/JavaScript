// for of

// array and string are iterable

let arr = ["aman", "anuj", "anil", "ram"];

for (let val of arr) {
  console.log(val);
}

// The Map object holds key-value pairs and remembers the original insertion order of the keys.

let movie = new Map();
movie.set("Raone", "SRK");
movie.set("Burfi", "Ranbir");
movie.set("Masaan", "Vickey");

for (let [key, value] of movie) {
  console.log(key, value);
}
