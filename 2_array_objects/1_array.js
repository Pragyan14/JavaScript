// In javascript array can store elements of different data type

let arr = [1, 2, 3, 4, 5];
let arr2 = new Array(2, 4, 1, 2, 4);

console.log(arr);
console.log(arr.includes(8)); // check for elements in array and return boolean values
console.log(arr.indexOf(3)); // return index of passed element, if not exist return -1

arr.pop();
console.log(arr); // delete element from last
arr.push(6);
console.log(arr); // insert element at last

arr.unshift(8); // insert element at index 0 and shift other elements
arr.shift(); // delete element at index 0

console.log("A:  " + arr.slice(2, 4)); // return element in range not including ending range
console.log(arr);
console.log("B:  " + arr.splice(2, 4)); // return element in range including end range and also delete that elements from original array
console.log(arr);
