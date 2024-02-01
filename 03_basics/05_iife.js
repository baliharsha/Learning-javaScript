// Immediately Invoked Function Expressions (IIFE)


// An IIFE (Immediately Invoked Function Expression) in JavaScript is a design pattern where 
// a function is defined and executed immediately after its creation. It is often used to 
// create a private scope for variables, preventing them from polluting the global scope. The 
// basic syntax for an IIFE looks like this:
// for example 👇👇👇


(function() {
    // code here
})();


// wrap the function with parenthesis and just after the end of parenthesis call it without 
// mentioning name and if you want to pass arguments then use the calling parenthesis. 🔍🔍🔍

// Key points about IIFE:

//1️⃣ Encapsulation: The variables and functions declared inside the IIFE are not accessible 
//    from outside, helping to avoid naming conflicts and keeping the global scope clean.

//2️⃣ Immediate Execution: The function is invoked immediately after its creation, ensuring 
//    that the code inside is executed right away.

//3️⃣ Anonymous Function: Typically, IIFE is created using an anonymous function, but you can 
//    also use named functions if needed.

// -----------------------------------------------------------------------------------


// for example 👇👇👇


(function() {
    var x = 10;
    console.log(x); // This variable is confined to the IIFE's scope
})();

// console.log(x); // Error! 'x' is not defined outside the IIFE

// IIFE is commonly used to create modular and isolated code, especially in scenarios where 
// you want to avoid impacting the global scope with temporary variables or 
// helper functions🔍🔍🔍

// -----------------------------------------------------------------------------------

//🔴 note=> always use " semi-colon ; " after the IIFE function otherwise it throws error.
// And IIFE works in both "simple function" and "arrow function"🔍🔍🔍

//🔴 example of  named IIFE => name of function means simple function in IIFE. 👈👈👈

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

//🔴 example of  without named IIFE => means Arrow function  in IIFE. 👈👈👈


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')