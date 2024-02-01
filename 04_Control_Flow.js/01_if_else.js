// -------------------------------🔴  if - else   🔴------------------------------------
// The "if-else" statement in JavaScript is used for conditional branching, allowing you to
// execute different code blocks based on whether a specified condition evaluates to true 
// or false.

// for example 👇👇👇

// if (condition) {
//     // code to be executed if the condition is true
//   } else {
//     // code to be executed if the condition is false
//   }

// more example 👇👇👇

// if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");

// --------------------------🔴  comparison operators  🔴 -----------------------------------

// In JavaScript, comparison operators are used to compare values and return a Boolean
//  result  (true or false). Here are the most common comparison operators:

// <, >, <=, >=, ==, ===, !==, !=

//🟢 Equality (==) and Strict Equality (===):

//1️⃣ " == " (double equals too) checks for equality after type coercion. It converts the 
// operands to the same type  before making the comparison.👈👈

//2️⃣ " === " (triple equals too) checks for strict equality without type coercion. It 
// requires both the value and the type to be the same.👈👈

// for example 👇👇👇

// let a = 5;
// let b = "5";

// console.log(a == b);  // true (type coercion)
// console.log(a === b); // false (strict equality)


//🟢 Inequality (!=) and Strict Inequality (!==):

//3️⃣ " != " (not equals to) checks for inequality after type coercion.👈👈

//4️⃣ " !== " (not double equals to) checks for strict inequality without type coercion.👈👈

// for example 👇👇👇

// let a = 5;
// let b = "5";

// console.log(a != b);  // false (type coercion)
// console.log(a !== b); // true (strict inequality)

// 🟢 Greater Than (>) and Less Than (<):

//5️⃣ " > " checks if the left operand is greater than the right operand.👈👈

//6️⃣ " < " checks if the left operand is less than the right operand.👈👈


// for example 👇👇👇

// let x = 10;
// let y = 5;

// console.log(x > y);  // true
// console.log(x < y);  // false


// 🟢Greater Than or Equal To (>=) and Less Than or Equal To (<=):

//7️⃣ " >= " checks if the left operand is greater than or equal to the right operand. 👈👈

//8️⃣ " <= " checks if the left operand is less than or equal to the right operand. 👈👈


// for example 👇👇👇

// let x = 10;
// let y = 5;

// console.log(x >= y);  // true
// console.log(x <= y);  // false

// --------------------------🔴  comparison operators  🔴 -----------------------------------


// more examples 👇👇👇

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// --------------------------🔴  Nested if - Else  🔴 -----------------------------------

// You can also have multiple "else if" conditions to handle multiple cases:

// for example 👇👇👇

// if (condition1) {

//     // code to be executed if condition1 is true

//   } else if (condition2) {

//     // code to be executed if condition2 is true

//   } else {

//     // code to be executed if none of the conditions are true
//   }
  


// more example 👇👇👇



// const balance = 1000

//🔻 example of implisit scope which runs in a single line and if you want to use more then 
// 1 line then you can use coma " , " after every statement.

// but do not write code like this  👇👇❌❌❌

// if (balance > 500) console.log("test"),console.log("test2");

//🔻 always use proper syntex to write neat and clean code like this 👇👇✅✅✅

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }


// --------------------------🔴 logical operators   🔴 -----------------------------------

// 1️⃣ && (logical AND)
// 2️⃣ || (logical OR)
// 3️⃣ ! (logical NOT)


// In JavaScript, the logical operators are used to perform logical operations on Boolean 
// values or expressions. Here's a brief 
// explanation of each:👇👇👇

//1️⃣ Logical AND (&&):

// The && operator returns true if both operands are true, and false otherwise.
// It short-circuits, meaning if the left operand is false, the right operand is not 
// evaluated, as the overall result will be false regardless.🔍🔍🔍

// FOR EXAMPLE 👇👇👇

// let x = true;
// let y = false;

// console.log(x && y);  // false
// console.log(x && true);  // true (right operand is evaluated)




// 2️⃣Logical OR (||):

// The || operator returns true if at least one of the operands is true, and false otherwise.
// Like &&, it also short-circuits. If the left operand is true, the right operand is not 
// evaluated, as the overall result will be true regardless.🔍🔍🔍

// FOR EXAMPLE 👇👇👇

// let x = true;
// let y = false;

// console.log(x || y);  // true
// console.log(false || true);  // true (right operand is not evaluated)



// 3️⃣ ! (logical NOT)

// The ! operator negates a Boolean value. It returns true if the operand is false, 
// and false if the operand is true.🔍🔍🔍


// FOR EXAMPLE 👇👇👇

// let x = true;

// console.log(!x);  // false
// console.log(!false);  // true


// MORE EXAMPLE ( && ) 👇👇👇


const userLoggedIn = true
const debitCard = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

// MORE EXAMPLE ( || ) 👇👇👇


const loggedInFromGoogle = false
const loggedInFromEmail = true

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}