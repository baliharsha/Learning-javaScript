// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// const myArr = [0, 1, 2, 3, 4, 5]
// myArr.push(6)
// myArr.push(7)

// push() method adds an element in the last in an ARRAY [] 🔍🔍🔍


// const myArr = [0, 1, 2, 3, 4, 5]
// myArr.pop()

// pop() method removes last element of an ARRAY []🔍🔍🔍


// const myArr = [0, 1, 2, 3, 4, 5]
// myArr.unshift(9)

// unshift() method adds an element in the starting in an ARRAY at 0 index [] 🔍🔍🔍


// const myArr = [0, 1, 2, 3, 4, 5]
// myArr.shift()

// shift method removes element from the starting in an ARRAY from 0 index [] 🔍🔍🔍


// const myArr = [0, 1, 2, 3, 4, 5]
//  to find element in an ARRAY 🔍🔍🔍
// console.log(myArr.includes(9)); 👈👈👈


// const myArr = [0, 1, 2, 3, 4, 5]
//  to find index value of an element in an ARRAY 🔍🔍🔍
// console.log(myArr.indexOf(3));👈👈👈


// 👇👇👇 to convert an ARRAY into string ❗❗❗


// const myArr = [0, 1, 2, 3, 4, 5]
// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

// difference between slice and splice ❗❗❗

// slice does not manipulates the original array  🔍
// but splice manipulates the original array  🔍

// slice removes the copy of an element from the original array 🔍
// splice removes the original element from the original array 🔍

// In slice to remove an element we can give command  slice(1, 3). 🔍
// which means it removes elements from index 1 and 2 it does not includes 3.

// In splice to remove an element we can give command  splice(1, 3). 🔍
// which means it removes elements from index 1, 2 and 3 it will remove 3 also.


// 👆 example 👇👇👇

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2); 