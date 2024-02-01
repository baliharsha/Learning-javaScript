// ------------------------🔴 Truthy and Falsey Values 🔴------------------------------

// In JavaScript, truthy and falsey values refer to the concept of evaluating values in a 
// boolean context. A value is considered truthy if it coerces to `true` when evaluated in a
//  boolean context, and falsey if it coerces to `false`. This is important when using 
// conditions in statements like `if`, `while`, and other control flow structures.🔍🔍🔍


// Here's a general overview of truthy and falsey values in JavaScript:👇👇👇

// Truthy values:
// - `true`
// - Any non-empty string (e.g., "hello")
// - Any non-zero number (e.g., 42, -1)
// - Objects (including arrays and functions)

// Falsey values:
// - `false`
// - `null`
// - `undefined`
// - `0` (numeric zero)
// - `-0` (negative zero)
// - `NaN` (Not-a-Number)

// Examples:

// ```javascript
// if (true) {
//   console.log("This is truthy");
// }

// if ("hello") {
//   console.log("This is truthy");
// }

// if (42) {
//   console.log("This is truthy");
// }

// if ({ key: "value" }) {
//   console.log("Objects are truthy");
// }

// if (false) {
//   console.log("This is falsey");
// }

// if (0) {
//   console.log("This is falsey");
// }

// if (null) {
//   console.log("This is falsey");
// }

// if (undefined) {
//   console.log("This is falsey");
// }
// ```

// It's important to note that when using equality operators (`==` or `===`), the concept of 
// truthy and falsey values comes into play. For example, using `==` for comparison performs
//  type coercion, whereas `===` does not. For strict equality, it's often recommended to 
// use `===` to avoid unexpected type coercion behavior.





const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}