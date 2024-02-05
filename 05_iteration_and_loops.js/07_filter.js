// ---------------------------🔴  filter  🔴---------------------------------------------



//  In JavaScript, the `filter` method is a powerful tool when working with arrays.
//  It allows you to create a new array containing elements that meet certain criteria, or, 
//  in simpler terms, it filters out elements based on a specified condition.🔍🔍🔍

// Here's a basic example:👇👇👇

// const numbers = [1, 2, 3, 4, 5];

// // Use filter to get only even numbers 👈  condition

// basic syntex 👇👇👇

// const evenNumbers = numbers.filter(function(number) {
//   return number % 2 === 0;
// });

// console.log(evenNumbers); // Output: [2, 4]👈👈👈
// ```

// In this example, the `filter` method is used to create a new array (`evenNumbers`) that 
// only contains the even numbers from the original array (`numbers`). 🔍🔍🔍

// You can also use arrow functions for a more concise syntax: ✅✅👇

// ```javascript
// const numbers = [1, 2, 3, 4, 5];

// // Use filter with arrow function to get only even numbers
// const evenNumbers = numbers.filter(number => number % 2 === 0);

// console.log(evenNumbers); // Output: [2, 4] 👈👈👈
// ```

// The callback function you pass to `filter` should return a boolean value. 
// If it returns `true`, the element will be included in the new array; if `false`,
//  it will be excluded.🔍🔍🔍

// You can also return the values and perform operation like condition check
//  in " filter method" which is not possible in " forEach "🔴🔴🔴


// Few more examples 👇👇👇

// For getting numbers less than 4👇

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )

//👇 method to return values in new variable through " forEach "  but it is lengthy.. 🔍🔍🔍

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// To Access the values from  multiple objects in an array by using "filter method" 👇👇👇


  let userBooks = books.filter( (bk) => bk.genre === 'History')


// You can also use multiple condition check operators during condition check in filter👇


  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);