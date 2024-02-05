// -------------------------------🔴  Reduce Method   🔴------------------------------------


// In JavaScript, the `reduce` method is a higher-order function that is used to iterate over
//  an array and accumulate the values into a single result. It takes a callback function as 
// its argument, which is applied to each element of the array, and it accumulates a single 
// value (the result) based on the logic provided in the callback. 🔍🔍🔍

// The syntax for `reduce` looks like this: 👇


// array.reduce(callback, initialValue);

//🔴 - `callback`: This is a function that is called for each element in the array. 
// It takes four arguments: `accumulator`, `currentValue`, `currentIndex`, and `array`.🔍🔍🔍

//1️⃣   - `accumulator`: The accumulated result of the previous iterations.
//2️⃣   - `currentValue`: The current element being processed in the array.
//3️⃣   - `currentIndex`: The index of the current element being processed.
//4️⃣   - `array`: The array `reduce` was called upon.

//🔴 - `initialValue`: It is an initial value for the `accumulator`. If provided, the 
// `reduce` function will use it as the initial value for the first iteration. 
// If not provided, the first element of the array is used as the initial value, 
// and iteration starts from the second element.🔍🔍🔍

// Here's a simple example that uses `reduce` to calculate the sum of an array:👇

// ```javascript
// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);

// console.log(sum); // Output: 15 👈👈👈
// ```

//👆 In this example, the `accumulator` starts with an initial value of 0, and the callback 
// function adds each element of the array to the accumulator, resulting in the sum of all 
// elements.🔍🔍🔍


// more examples 👇👇👇


// Basic example of using reduce method in shopping cart to calculate amount 👇👇👇 

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);