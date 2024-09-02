/*---------- PREMTIVE DATATYPE ----------*/

let num = 1
console.log(typeof(num));       // number (int)

let dec = 1.2
console.log(typeof(dec));       // number (float)

let str = "pragyan"
console.log(typeof(str));       // string

let d = null
console.log(typeof(d));         // object   

let e = undefined
console.log(typeof(e));         // undefined

let f = Symbol("patidar")
console.log(typeof(f));         // symbol

let n = NaN
console.log(typeof(n))          // number



/*---------- NON-PREMTIVE DATATYPE ----------*/

let arr = ["abc","bcd","efg"]
console.log(typeof(arr));       // object

let func = function abc() {
    return true;
}
console.log(typeof(func));      // function

let obj = {
    fname : "pragyan",
    age : 20
}
console.log(typeof(obj));       // object