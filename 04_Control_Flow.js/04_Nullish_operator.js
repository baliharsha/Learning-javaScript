// --------------------🔴// Nullish Coalescing Operator (??): null undefined 🔴-------------

// The nullish coalescing operator (`??`) is a feature introduced in JavaScript (ECMAScript 
// 2020) that provides a concise way to handle default values for variables or expressions 
// when the value is `null` or `undefined`. It is particularly useful when you want to 
// assign a default value only when the variable is `null` or `undefined`, but not when it's 
// an empty string (`''`), `0`, `false`, or any other falsy value.👈👈👈

// Here's the basic syntax:👇👇👇

// ```javascript
// const result = someVariable ?? defaultValue;
// ```

// In this example, if `someVariable` is `null` or `undefined`, `result` will be assigned the value of `defaultValue`.

// Here are a few examples to illustrate the behavior:

// ```javascript
// let x = null;
// let y = 0;
// let z = '';

// console.log(x ?? 'Default'); // Output: 'Default'
// console.log(y ?? 42);       // Output: 0
// console.log(z ?? 'Hello');  // Output: ''
// ```

// As you can see, the nullish coalescing operator only assigns the default value when the variable is explicitly `null` or `undefined`, not when it's a falsy value like `0` or an empty string `''`.

// This operator is especially useful in situations where falsy values are valid and should not be replaced by default values.



// more example 👇👇👇

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);