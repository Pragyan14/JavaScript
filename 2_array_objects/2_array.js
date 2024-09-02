let dc_heros = ["flash", "batman", "aquaman", "superman"];
let marvel_heros = ["thor", "ironman", "groot", "rocket"];
let indian_heros = ["raone", "shaktiman", "krish", "chiti"];

console.log(dc_heros.concat(marvel_heros));  //  ['flash','batman','aquaman','superman','thor','ironman','groot','rocket']

// Spread operator
let all_heros = [...dc_heros, ...marvel_heros, ...indian_heros]; // merge all array elements

console.log(all_heros);  // [ 'flash','batman','aquaman','superman','thor','ironman','groot','rocket','raone','shaktiman','krish','chiti]

