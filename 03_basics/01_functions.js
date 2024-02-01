// +++++++++++++++++++  🔴 Defination of function 🔴+++++++++++++++++++++++++++++++++++++

// In JavaScript, functions are blocks of reusable code that can be defined and called to 
// perform a specific task. Functions allow you to organize your code into logical units,
//  making it easier to understand, maintain, and reuse. Here's the basic syntax for defining
// functions in JavaScript: 👆👆👆

// 3️⃣ Types of function creation....🔍🔍🔍  


// Function declaration
function functionName(parameters) {
    // code to be executed
  }
  
  // Function expression

//   const functionName = function(parameters) {
//     // code to be executed
//   };
  
  // Arrow function (ES6+)
//   const functionName = (parameters) => {
//     // code to be executed
//   };
  
//   Let's understand each part: 👇👇👇👇



// 1️⃣ Function Declaration:   👈👈👈

    // function functionName(parameters) {
    //     // code to be executed
    // }
  
// 👆 function: The keyword used to declare a function.

// 👆 functionName: The name of the function, which you can use to call the function later.

// 👆 parameters: Input values that the function can accept. They are optional, and you
//                can have multiple parameters separated by commas. ❗❗❗❗🔍

// 👆 {}: The curly braces contain the body of the function, where you place the code to be 
//        executed when the function is called.




//  2️⃣ Function Expression:            👈👈👈

    //  const functionName = function(parameters) {
    //           // code to be executed
    //   };

  
//   👆  const functionName: The function is assigned to a variable. This is known as a
//                           function expression.

//   👆  The rest of the syntax is similar to the function declaration.



// 3️⃣ Arrow Function or Fat Arrow Function (ES6+):  () => {}   👈👈👈

    //   const functionName = (parameters) => {
    //          // code to be executed
    //   };


// 👆  Introduced in ECMAScript 2015 (ES6), arrow functions provide a more concise syntax.

// 👆  (parameters) =>: The arrow function syntax. If there's only one parameter, you can 
//                      omit the parentheses.

//     omit meaning :   👆 "Omit" means to leave something out or skip it. 🔍🔍🔍

// 👆  {} : The curly braces contain the body of the function, similar to other function 
//          types.


//+++++++++++++++++++++++  How to call a function ❓❓❓  ++++++++++++++++++++++++++++++


// To call a function, you have to use its name followed by parentheses and provide any 
// required arguments:

// for example 👇👇👇

// Calling a function

// functionName(argument1, argument2); 


// JavaScript functions can give back results using the "return" 👈   keyword. 🔍🔍🔍

//  Sometimes, they can  also be used with " new " 👈 to create objects,
//  but that's not so common.


// examples of different functions 👇👇👇


function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

// const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

// output => Result:  undefined  👈  👈  👈  

// if you did not use " return " it gives undefined 👆 👆 👆 

// _________________________________________________________________________________________

// 🔻 And if you use " return " in any function next lines code will not be run in that function.  So always use " return " in the last line inside any function 🔍🔍🔍

// and if you use " return " it gives the value  👇👇👇



// function addTwoNumbers(number1, number2){

// to wirte return code method 1️⃣ 👇

//     // let result = number1 + number2
//     // return result


// to wirte return code method 2️⃣ 👇 in this method you save a line and without 
// creating a variable 

//     return number1 + number2

// }

//❗❗❗ when you return a value from any function you have to store it in new variable to 
// access its value or consolie.log will work. 🔍🔍🔍 

// const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

// output => Result:  8       👈 👈 👈  


// __________________________________________________________________________________________

// created login user function example  👇👇👇


function loginUserMessage(username){

    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// output=> hitesh just logged in 👈👈👈


//🔻 If you did not passed any value through argument  while accessing the function it gives 
// output => undefined 🔍🔍🔍  

// console.log(loginUserMessage()) 
// output=> undefined just logged in 👈👈👈


// in this case we have to apply conditions if - else to check  ❗❗❗ 

// undefined and empty string " " are considered as false value in js....🔍🔍🔍

// method 1️⃣ through if(username ===  undefined)...

// function loginUserMessage(username){
//     if(username ===  undefined){
//         console.log("PLease enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage()) 

//------------------------------------------------------------------------------------------



// method 2️⃣ through if(!username)... 

// ! this sign changes the current value. true convert in false or false converted in true..
// working of both methods are same..🔍🔍🔍


// function loginUserMessage(username){
//     if(!username){
//         console.log("PLease enter a username");
//         return   
//     }
//     return `${username} just logged in`

// }

// console.log(loginUserMessage()) 



// ------------------------------------------------------------------------------------------
//                              ❗❗❗   New-Topic on functions  ❗❗❗


// when you want to create a billing function for a shopping website or similer site where you don't know how much items did the customer will add in his/her cart or similarly you do not know the quatity of prizes of the items so in this case what do we do❓❓❓ 

// in this situation we have to use the rest operators for ex: ( ...paraMeterName ) 


// important points Read 👇👇🔍🔍🔍

// one more thing rest operator and spread operator both are looking same (3dots + paraname)

// for example => spread operator ( ...parameterName ) Rest operator ( ...parameterName )

// but we can decide at the time of use that which one we are using...  ❗❗❗

// for example 👇👇👇

// function calculateCartPrice(num1){
//     return num1
// }

// console.log(calculateCartPrice(2));   
// output=> 2  if user pass a single value in argument it is working properly...

// ------------------------------------------------------------------------------------------

// but what if user pass 2 or more arguements in it❓❓❓


// for example 👇👇👇

// function calculateCartPrice(num1){
//     return num1
// }

// console.log(calculateCartPrice(2,4,6,8));   
// output=> 2  it gives only 2 which is the first value of the arguement. ❌❌❌ not working.


// --------------------------------------------------------------------------------------


//🔻now we have to use the Rest operator to accept multiple arguments 🔍🔍👇👇👇


// function calculateCartPrice(...num1){
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 500, 2000))

// output=> in an Array [ 200, 400, 500, 2000 ] which is eazy to calculate whole the values.
//  Now its working perfectly..✅✅✅

// --------------------------------------------------------------------------------------------

//                             ❗❗❗    interview question   ❗❗❗

// what if we use Rest operator after 1 or 2 or more paramenters then 
// what will be the output❓❓❓


// function calculateCartPrice(val1, val2, ...num1){
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 500, 2000))

// output=> [ 500, 2000 ]  👈👈👈
// because ' 200 ' is passed into ' val1 ' and similarly '400' is passed into ' val2 ' 🔍🔍🔍
// and rest of the values passed into the rest operator ...num1


// --------------------------------------------------------------------------------------


// How to pass objects through parameter and arguments in a function ❓❓❓

// method 1️⃣

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){

    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

    // inside the function we have to use the name which we have taken in paramenter insteed the actual name of the object to take the values. and if you take the actual name then it will be okkk. 🔍🔍❗❗

}

handleObject(user)

// we can use " anyobject " at the place of parameter to access koibhi object. it is ok ✅✅
// but at the time of accessing the values we have to use the name of the 
// object which we are reffering 🔍🔍🔍❗❗

// method 2️⃣  we can also pass the values of an object through the agruments...

// for example 👇👇👇


// handleObject({
//     username: "sam",
//     price: 399
// })



// ----------------------------------------------------------------------------------------


// How to pass Arrays through parameter and arguments in a function ❓❓❓


// create a function which accepts the value of an array and return its 2nd value ❓❓❓

// for example 👇👇👇

// method 1️⃣ pass through variable..

// const myNewArray = [200, 400, 100, 600]


// function returnSecondValue(getArray){
//     return getArray[1]

// //  As we know the index value starts with [0], So we have
// //  to take [1] behalf of the index number for accessing the second value from the Array. 

// we can use " getArray " at the place of parameter to access any Array. it is ok ✅✅✅
// but at the time of accessing the values we have to use the name of the 
// object which we are reffering 🔍🔍🔍❗❗


// }

// console.log(returnSecondValue(myNewArray));

// output=> 400 [ we got the 2nd value ]  👈👈👈


// method 2️⃣  we can also pass the values through the agruments of an Array...

// for example 👇👇👇


// console.log(returnSecondValue([200, 400, 500, 1000]));

// output=> 400 [ we got the 2nd value ]  👈👈👈