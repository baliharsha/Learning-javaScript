// defination of javascript

// 1️⃣.Javascript is a dynamically typed language because data type will automatically assigned at the time of compilation or code execution.

                            //   or   //  

// 2️⃣.JavaScript is considered as a dynamically typed language because the data type of a variable is determined by the value assigned to it at runtime. JavaScript does not require you to explicitly declare the data type of a variable; it automatically adapts based on the value assigned to that variable.       


// There are two categories of data types:

// 1️⃣)Primitive: These are call-by-value. The types of primitive data types include String, Number, Boolean, Null, Undefined, Symbol, and BigInt. Note that Symbols uniquely identify variables, even if two variables have the same data and data type. Primitive variables datatype is same but null datatype is object 

// 2️⃣) Non-primitive: These are call-by-reference. The types of non-primitive data types are Array, Object, and Function. The data type for these is 'object,' but for functions, they return a data type of 'function,' though they also have an object data type.


//  example of Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// example of Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

  

                           // in details 👇👇👇👇  // 


// 1.Number: Represents both integer and floating-point numbers. Example: 5, 3.14.
 
// 2.String: Represents a sequence of characters enclosed in single or double quotes. Example: "Hello, world!".

// 3,Boolean: Represents a binary value, either true or false, often used for conditional logic.

// 4.Undefined: Represents a variable that has been declared but hasn't been assigned a value yet. Example: let x;.

// 5.Null:  standalone value it is represenataion of empty value it is special type and it is a object type. Example: let y = null; 

// 6.Symbol (ES6): it is mostly used used to find uniqnece.

// 7.BigInt (ES11): Represents large integers that cannot be represented by the Number type.

//  Refence (Object Data Types):

// 1.Object: Represents a collection of key-value pairs (properties and methods). Example: { name: "John", age: 30 }.

// 2.Array: Represents a list-like collection of values, indexed by numbers (integer indices). Example: [1, 2, 3, 4].

// 3.Function: Represents a reusable block of code that can be invoked or called with arguments. Example: function add(x, y) { return x + y; }.

// 4.Date: Represents dates and times.

// 5.RegExp: Represents regular expressions for pattern matching.



// lets talk about some Range of Primitive DataType:

//     1.Number:
//         Represents both integers and floating-point numbers.
//         Typical Range: -9,007,199,254,740,992 (-2^53) to 9,007,199,254,740,992 (2^53 inclusive.
//         Smallest Increment: 2^(-52).

//     2.String:
//         Represents a sequence of characters.
//         No specific range limit, but practical limits depend on memory and system resources.

//     3.Boolean:
//         Represents true or false.
//         Only two possible values: true and false.

//     4.Undefined:
//         Represents a variable that has been declared but hasn't been assigned a value.
//         It has only one possible value: undefined.

//     5.Null:
//         Represents the intentional absence of any object or value.
//         It has only one possible value: null.

//     6.Symbol (ES6):
//         Represents a unique and immutable value.
//         No specific range limit.

//     7.BigInt (ES11):
//         Represents large integers that cannot be represented by the Number type.
//         The range is practically unlimited and depends on available memory.
