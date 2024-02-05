forEach On Array


const coding = ["java", "ruby", "py", "javascript"]

// coding.forEach(function (val) {
//     console.log(val);
// })

// ----------OR-------------------

// coding.forEach( (item) => {
//     console.log(item);
// })
// output=> java
//          ruby
//          py
//          javascript

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)
// output=>
// java
// ruby
// py
// javascript

// coding.forEach((item, index, arr) => {
//    console.log(item, index, arr);
// })
// output=>
// java 0 [ 'java', 'ruby', 'py', 'javascript' ]
// ruby 1 [ 'java', 'ruby', 'py', 'javascript' ]
// py 2 [ 'java', 'ruby', 'py', 'javascript' ]
// javascript 3 [ 'java', 'ruby', 'py', 'javascript']

//  forEach on Object

 const myCoding = [
    {
        languageName: "javascript"
        languageFileName: "js"
    },
    {
        languageName: "python"
        languageFileName: "py"
    },
    {
        languageName: "java"
        languageFileName: "java"
    },
 ]
 myCoding.forEach((item) => {
console.log(item.languageName);
 })

 //------------------------------- 🔴 for Each loop 🔴 ---------------------------------------


//1️⃣ The `forEach` method is a " higher-order function " in JavaScript. 
//2️⃣ that allows you to iterate over each element of an array.
//3️⃣ It takes a callback function as an argument, and this  callback function is executed
//  once for each element in the array. 🔍🔍🔍🔍

// Here's the basic syntax:

// array.forEach(function(currentValue, index, array) {
//   // Your code here
// });


//1️⃣ - `currentValue`: The current element being processed in the array.
//2️⃣ - `index`: The index of the current element being processed.
//3️⃣ - `array`: The array `forEach` was called upon.


// Here's a more detailed example: 👇👇👇

// let fruits = ['apple', 'banana', 'orange'];

// fruits.forEach(function(fruit, index) {
//   console.log(`Index ${index}: ${fruit}`);
// });


// In this example, for each iteration, it logs the index and the corresponding fruit. 
// Remember, the order of the parameters in the callback matters—`currentValue` comes first,
// followed by `index`.🔍🔍🔍

// You can also use "" arrow functions "" for brevity:👇👇👇 

// fruits.forEach((fruit, index) => console.log(`Index ${index}: ${fruit}`));


// The `forEach` loop is handy for simple iteration tasks, but keep in mind that it doesn't 
// have a built-in way to break out of the loop early. If you need more control or want to 
// modify the array elements, you might want to consider using other loops 
// like `for` or `map`. 🔍🔍🔍


// few more examples 👇👇👇


// Example to print an array simply using normal function 👇

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// Example to print an array simply using arrow function 👇


// coding.forEach( (item) => {
//     console.log(item);
// } )


// Example to print an array simply by using another function 👇

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

//1️⃣ You can simple 👆 pass the reference of the another function.🔍🔍🔍
//2️⃣ No need to execute it with ( paranthesis ) simple write the name of that function.🔍🔍🔍


// Example to print single item , index, complete array by using arrow function 👇
// You can pass these values in the form of parameter🔍🔍🔍


// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )


// Example to access values of multiple objects in an array simply 🔴👇


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )



//🔻 Important fact about for each 👇👇👇

// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values);




// If you want to return values in a variable like "" for_loop "" or "" other_loops "" then❓
// for_Each loop does not allows to return values in a variable ❌❌❌
// and also not allows to perform operations.❌❌❌

//Due to this reason  " Filter " is great option to use in the place of forEach ✅✅✅



//👇 method to return values in new variable through forEach  but it is lengthy..

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);