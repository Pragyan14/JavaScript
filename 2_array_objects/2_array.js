let dc_heros = ["flash","batman","aquaman","superman"]
let marvel_heros = ["thor","ironman","groot","rocket"]
let indian_heros = ["raone","shaktiman","krish","chiti"]

console.log(dc_heros.concat(marvel_heros));

let all_heros = [...dc_heros,...marvel_heros,...indian_heros]       // spread array

console.log(all_heros);