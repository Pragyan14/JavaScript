let fname = "123a";
console.log(typeof fname);
console.log(Number(fname));

// Any to Number

// "123" => 123
// "123a" => NaN
// true => 1 , false => 0
// null => 0
// undefined => NaN

let lname = undefined;
console.log(typeof lname);
let booleanLlName = String(lname);
console.log(booleanLlName);
console.log(typeof booleanLlName);

// Any to String

// 123 => "123"
// true = "true", false => "false"
// null = "null"
// undefined = "undefined"

let isLogged = undefined;
let booleanIsLogged = Boolean(isLogged);
console.log(typeof booleanIsLogged);
console.log(booleanIsLogged);

// Any to Boolean

// 1,2,3....  => true
// 0 => false
// "" => false
// "abc" => true
