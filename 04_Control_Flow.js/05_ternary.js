//------------------------🔴 Terniary Operator 🔴----------------------------------------

// In JavaScript, the ternary operator is a concise way to write a conditional (if-else)
//  statement. It's often used when you want to assign a value to a variable based on a 
// condition. The syntax of the ternary operator is as follows:👇👇👇

// condition ? expression_if_true : expression_if_false; 👈👈👈

// Here's a simple example: 👇👇👇

// let isTrue = true;
// let result = isTrue ? "It's true!" : "It's false!";
// console.log(result);
// Output: It's true!


// In this example, if the condition `isTrue` is true, the value on the left side of the 
// colon (`"It's true!"`) is assigned to the variable `result`. If the condition is false, 
// the value on the right side of the colon (`"It's false!"`) is assigned.

// You can also nest ternary operators, but it's important to use them judiciously to 
// maintain code readability. Here's an example of nested ternaries:

//  for example 👇👇👇

// let number = 5;
// let result = number > 0 ? "Positive" : number < 0 ? "Negative" : "Zero";
// console.log(result);
// // Output: Positive

// In this example, the first ternary operator checks if `number` is greater than 0. If 
// true, it returns "Positive." If false, it goes to the second ternary operator, which 
// checks if `number` is less than 0. If true, it returns "Negative." If both conditions are 
// false, it returns "Zero."

// While ternary operators can make code more concise, it's essential to strike a balance 
// between brevity and readability to ensure that your code remains understandable to others.


// More example 👇👇👇


// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")