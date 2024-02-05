// --------------------🔴  chaining methods  🔴-------------------------------------------



// You can also use chaining methods here 👇👇👇 means applying multiple methods 
// on a single array 🔍🔍🔍🔴


const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);



//👉 Chaining in JavaScript refers to the practice of chaining multiple method calls together
//  on an object in a single statement. This is often seen with methods that return the 
// modified object or a new object. 🔍🔍🔍

// A common use case for chaining is in array manipulation, where methods like `map`, 
// `filter`, and `reduce` are often used together. Here's an example:


// const numbers = [1, 2, 3, 4, 5];

// const result = numbers
//   .filter(number => number % 2 === 0)  // Keep only even numbers
//   .map(number => number * 2)            // Double each remaining number
//   .reduce((sum, number) => sum + number, 0);  // Sum up the doubled numbers

// console.log(result);  // Output: 18 👈👈👈


// In this example, the array `numbers` undergoes a series of transformations using `filter`,
//  `map`, and `reduce` in a chained manner. Each method is applied to the result of the 
// previous one, creating a concise and readable code structure.🔍🔍🔍

// Chaining can also be seen in other contexts, such as with methods in the DOM (Document 
// Object Model) manipulation or in libraries that support a fluent interface. It enhances
//  code readability and allows for more expressive and compact code.🔍🔍🔍