// -------------------------------🔴  map   🔴----------------------------------------

// In JavaScript, the `map` method is a higher-order function 
// that is used to iterate over an array and apply a callback function to each element, 
// creating a new array with the results. 🔍🔍🔍

// Here's a simple example:👇👇👇

// ```javascript
// const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = numbers.map(function(number) {
//   return number * 2;
// });

// console.log(doubledNumbers);
// ```

//👆 In this example, the `map` method takes each element of the `numbers` array, multiplies it by 2 using the provided callback function, and creates a new array (`doubledNumbers`) with the results.🔍🔍🔍

// You can also use arrow functions for a more concise syntax:👇

// ```javascript
// const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = numbers.map(number => number * 2);

// console.log(doubledNumbers);
// ```

// This makes the code cleaner and more readable. The `map` method is a powerful tool for 
// transforming data in an array without modifying the original array.🔍🔍🔍🔍

// more example 👇👇👇


const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})