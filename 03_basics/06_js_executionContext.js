// Topic=>       " javaScript executions context "

// In JavaScript, the execution context is a concept that helps to manage the execution of 
// code. It includes information about the environment in which the code is running, 
// variables, functions, and other related details. Understanding execution context is 
// crucial for grasping the behavior of JavaScript code. 👈👈🔍🔍🔍


// 🔴 There are two types of execution contexts in JavaScript: 🔴

//1️⃣ Global Execution Context:

//🟢 It represents the default or outermost execution context.
//🟢 There is only one global execution context in a JavaScript program.
//🟢 It includes global variables and functions that are accessible throughout the entire 
//     program.


//2️⃣ Function Execution Context:

//🟢 Every time a function is called, a new function execution context is created.
//🟢 Each function has its own execution context, which includes variables and references to 
//    its parameters.
//🟢 The function execution context is pushed onto the execution stack.
//🟢 When a function finishes its execution, its context is popped from the stack.


//🔴 Points to remember 👇👇👇

// 1️⃣ Global execution context is created always. and Global execution context is 
//     reffered in a variable [ this ].

// 2️⃣ Global execution context is different for every run time environment for example =>
//     [browser, node, bun, dino]  depends on the run time environment you are using. 

// 3️⃣ Amongst all 👆 these examples Global execution context of Browser is most important. 
//    In Browser the value of [ this ]=> comes into Window Object. 🔍🔍🔍    

// 4️⃣ JAVASCRIPT is single threaded.


// -----------------------process of code execution-----------------------------------


// In JavaScript, the process of code execution involves 2️⃣ main phases: 
// 1️⃣ The memory creation phase (also known as the "creation" or "hoisting" phase) and 
// 2️⃣ The execution phase.

//1️⃣ Memory Creation Phase:

// 🔴 What happens: 🔴

//1️⃣ The JavaScript engine sets up memory space for variables and functions.
//2️⃣ Variable declarations are moved to the top of their scope (hoisting).

//🔴 Variables and Functions:🔴

//1️⃣ Variables are assigned the value undefined during this phase.
//2️⃣ Functions are fully stored in memory, including their entire code.

//🔻 Example:

// console.log(x); // undefined
// var x = 5;
// console.log(x); // 5



// 2️⃣Execution Phase:

//🔴  What happens: 🔴

//1️⃣ Code is executed line by line from top to bottom.
//2️⃣ Variables are assigned their actual values during execution.
//3️⃣ Functions are called and executed.


//🔴 Variables and Functions:🔴

//1️⃣ Variables are assigned values based on actual assignments.
//2️⃣ Functions are executed when called in the code.

//🔻 Example:

// console.log(x); // undefined
// var x = 5;
// console.log(x); // 5

// READ 👇👇👇

// In the first console.log, x is hoisted, so it exists but has the value undefined.
// In the second console.log, x now has the value 5.

// SUMMARY 🔻🔻🔻

// Memory Creation Phase:
//1️⃣ Allocates space for variables and functions.
//2️⃣ Variable declarations are hoisted and set to undefined.
//3️⃣ Functions are fully stored in memory.


// Execution Phase:
//1️⃣ Code is executed line by line.
//2️⃣ Variables are assigned actual values during execution.
//3️⃣ Functions are executed when called.

// ---------------------------process of code execution-----------------------------------

//    FOR EXAMPLE 👇👇👇

// ↑→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→↑
// ↑  let val1 = 10                                ↑
// ↑  let val2 = 5                                 ↑
// ↑                                               ↑
// ↑  function addNum(num1, num2){                 ↑
// ↑    let total = num1 + num2                    ↑   
// ↑    return total                               ↑
// ↑ }                                             ↑
// ↑  let result1  = addNum(val1, val2)            ↑
// ↑  let result1  = addNum(10, 2)                 ↑
// ↑                                               ↑
// ↑→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→↑


// The 1️⃣ and main step to execute this code is formation of " Global Execution Context "
// and " Global Execution Context " is alocate into [ this ] 👈 Keyword...

//The 2️⃣ step is memory Creation phase or creation phase. 👇👇👇

// val1 = undefined
// val2 = undefined
// addNum = stored the defination of function 👈 

// because there is no value assigned to this function till now So, In memory creation phase 
// functions is not assigned as undefined.   

// result1 = undefined
// result2 = undefined
 

//NOW The 3️⃣ step is Execution phase. 👇👇👇

// val1 = 10
// val2 = 5

// addNum = its value is already on hold so no work for addNum Because it is not called yet..

// result1 = in this line you can see the above code we have called the addNum function 👇👇

// nowagain a " New executional context " send box has been created for the addNum function🔍
// A new sendbox is created everytime when a functuion is called (). 

// In this " New executional context " send box we get 2️⃣ things 👇👇👇

// ↑→→→→→→→→  SEND-BOX  →→→→→→→→→→→→→→→→→→→→→→→→→→→↑
// ↑                                               ↑
// ↑ 1️⃣ New variable environment                  ↑
// ↑                                               ↑
// ↑ 2️⃣ Execution Thread.                         ↑
// ↑                                               ↑
// ↑                                               ↑
// ↑→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→↑

// Now in this Send box Again the process of execution is run specially for the
//  function called() 🔍🔍🔍


// ↑→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→↑
// ↑ 🔴memory creation phase                       ↑
// ↑                                               ↑
// ↑  val1 = undefined                              ↑
// ↑  val2 = undefined                              ↑
// ↑  total = undefined                            ↑
// ↑→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→↑


// In execution phase the calculation has been processed and values assigned.

// ↑→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→↑
// ↑ 🔴 Execution phase                            ↑
// ↑                                               ↑
// ↑  num1 = 10                                    ↑
// ↑  num2 = 5                                     ↑
// ↑  total = 10+5 = 15                            ↑
// ↑→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→↑

// After this workdone 👆 this phase is deleted automatoically 🔴important point 👈👈👈

// After the calculation according to the above function total is return.
// And it is returning to its parent context which is " Global Execution context " 🔍🔍🔍

// and now we have the value of 👇

// "result1 = 15 " which is passed in the main execution phase.. on line no. [148] 👈👈👈


// 🔻Read 🔍🔍🔍

// now for result2 the whole process is repeat and pushed the value of
//  result 2 in main execution phase. on line no. [149] 👈👈👈