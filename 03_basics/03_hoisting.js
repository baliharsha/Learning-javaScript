
// +++++++++++++++++🔴 interesting and important topic Hoisting 🔴++++++++++++++++++++++



// In JavaScript, hoisting is a behavior where variable and function declarations are moved 
// to the top of their containing scope during the compilation phase, before the code is 
// actually executed. This means that you can use variables and functions in your code before 
// they are declared, as if they had been moved to the top of the script or the current 
// function. However, only the declarations are hoisted, not the initializations or
//  assignments.  

// for example 👇👇👇

console.log(x); // undefined
var x = 5;

// The above code is effectively treated as if it were:
var x;
console.log(x); // undefined
x = 5;

// In the example above, the declaration of the variable x is hoisted to the top of the 
// scope, so the console.log(x) statement does not result in an error. However, the variable 
// is initialized with the value 5 only after its declaration. 🔍🔍🔍


// 1 more example  👇👇👇


// 1️⃣ (type) simple function.

// console.log(addone(5))

function addone(num){
    return num + 1
}

// 2️⃣ (type) function expression.

// addTwo(5)
const addTwo = function(num){
    return num + 2
}


// important points to read ❗❗❗

//1️⃣ you can execute the ❗simple function❗before the declaration it does not gives any error.
//2️⃣ But when you try to do the same with ❗function expression❗ it throws the error.
//3️⃣ function declared inside a variable is called function expression.