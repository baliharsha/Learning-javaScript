// ---------------------------🔴  while or Do_while loop 🔴  ---------------------------------

// In JavaScript, `while` and `do-while` are types of loops that allow you to repeatedly 
// execute a block of code as long as a specified condition is true. They are control flow 
// structures that help automate repetitive tasks.🔍🔍🔍

//----------------------------------🔴 `while` Loop 🔴----------------------------------

// The `while` loop has the following syntax:👇👇👇

// while (condition) {
//   // code to be executed as long as the condition is true
// }


//👆 Here's a breakdown of how it works: 👇👇

// 1️⃣. The `condition` is evaluated before each iteration.
// 2️⃣. If the `condition` is true, the code inside the loop is executed.
// 3️⃣. After the code execution, the `condition` is checked again.
// 4️⃣. If the `condition` is still true, the loop continues; otherwise, it terminates.

// Example:👇👇👇


// let count = 0;

// while (count < 5) {
//   console.log(count);
//   count++;
// }


//👆 In this example, the loop will print numbers 0 to 4 because the condition `count < 5` is 
// true initially, and after each iteration, `count` is incremented until the condition is 
// false.🔍🔍🔍


//----------------------------------🔴 DO - `while` Loop 🔴----------------------------------


// The `do-while` loop is similar to the `while` loop, but the key difference is that the 
// condition is checked after the code block is executed. This ensures that the code inside 
// the block is executed at least once.🔍🔍🔍

// The syntax is as follows: 👇👇👇


// do {
//   // code to be executed
// } while (condition);


// Example:👇👇👇


// let i = 0;

// do {
//   console.log(i);
//   i++;
// } while (i < 5);


//👆 This loop will also print numbers 0 to 4. Even if the condition is initially false, the 
// code inside the `do` block will execute at least once before checking the condition.🔍🔍🔍

// In summary, both `while` and `do-while` loops are used for repetitive tasks, with the main 
// difference being when the loop condition is checked. Use `while` when you want to check 
// the condition before the first iteration, and use `do-while` when you want to ensure that
//  the code block is executed at least once before checking the condition.❗❗❗🔍


// More examples of while and Do while loop 👇👇👇

// while 👇

let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }

let myArray = ['flash', "batman", "superman"]

let arr = 0
while (arr < myArray.length) {
    //console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}



// Do - while 👇


let score = 10

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);



// if we set the value of variable greater then the conditions variable it will only print 
// 1 value which we declclare outside the loop👇👇👇

let scores = 11

do {
    console.log(`Scores is ${scores}`);
    scores++
} while (scores <= 10);