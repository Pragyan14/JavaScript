console.log(Math.PI);

Math.PI = 3232;     // Not Possible

let piDescriptor = Object.getOwnPropertyDescriptor(Math,'PI');

console.log(piDescriptor);
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
// }

const user = {
    name:"Pragyan",
    email:"pragyan@testgmail.com"
}

let userDescriptor = Object.getOwnPropertyDescriptor(user,'name');

console.log(userDescriptor);
// {
//     value: 'Pragyan',
//     writable: true,
//     enumerable: true,
//     configurable: true
// }

// We can set our own property for object
Object.defineProperty(user,'name',{
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(user,'name'));
// {
//     value: 'Pragyan',
//     writable: false,
//     enumerable: false,
//     configurable: true
// }

user.name = "appu";         // No change will happen as we have set writable property false
console.log(user.name);     // Pragyan