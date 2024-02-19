const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter);
console.log(Math.PI);
Math.PI = 5
// output===>  {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }
//   3.141592653589793


const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true
}
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// using Flag in javascript to make change in properties like [true, false] 
