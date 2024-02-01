//-------------------------🔴  for loop  🔴 --------------------------------------------

// Defination :👇👇👇

// In JavaScript, a for loop is a control flow statement that allows you to repeatedly 
// execute a block of code as long as a certain condition is true. 
// The basic syntax of a for loop consists of three parts: 👇👇👇


// for (initialization; condition; iteration) {
//     // code to be executed
//   }
  

//1️⃣ Initialization: Executed before the loop starts. 
//                    It often initializes a counter variable.  🔍🔍🔍

//2️⃣ Condition: Evaluated before each iteration. 
//              If it's true, the loop continues; otherwise, it stops.  🔍🔍🔍

//3️⃣ Iteration: Executed at the end of each iteration. 
//               It typically increments or updates the counter variable.  🔍🔍🔍



// for example 👇👇👇

//1️⃣ for (let i = 1; i <= 5; i++) {
    //     console.log(i);
    //   }
    
    
//👆👆👆 This loop initializes i to 1, continues as long as i is less than or equal to 5,
//       and increments i by 1 after each iteration. 🔍🔍🔍

    


//2️⃣ for (let index = 0; index < array.length; index++) {
        //     const element = array[index];
    
// }


//🔴 please read the execution of code 👇👇👇 🔴

// 1️⃣  In FOR LOOP first of all we have to decalare and initialize a variable after that 
 
// 2️⃣  we have to put condition and the we have to give command for the incriment of code.

// 3️⃣  In the code of for loop the initial value opf index is 0. then it will check the 
// condition and then it will return the code which is written in the scope of for loop and 
// then it comes to the iteration part for the incriment of that particular code. ❗❗❗❗




// Guess which will prints prior the statement "5 is best number" or the value " 5 " ❓❓❓

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
    
}

// console.log(element);



//code for printing tables from 1 to 10 👇👇👇


for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
   }
    

//Simple example for printing an array through for loop 👇👇👇  

}
let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}