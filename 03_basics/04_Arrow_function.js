//  basic Task welcome the user with username 👇👇👇

// When you want to welcome a user and created a function inside an object 
// Then you want to use the keys of that object to be used to welcome the user
// In this case you did not use the name of that object then dot keys, 
// for example => if you write console.log(`${user.username} , welcome to website`); ❌❌❌
// It will throw error ❌❌❌

// in this senario you have to write " this.keys " to target your parent object because the 
// function is already inside that object  🔍🔍🔍
        
// for example 👇👇👇

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// output=> hitesh , welcome to website


// And if anybody wants to change the username for example 👇👇👇

// user.username = "sam"
// user.welcomeMessage()
// output=> sam , welcome to website


// console.log(this);


//------------------------🔴  Some important points to remember 🔴--------------------------

//1️⃣ if you do console.log(this) inside the object it will print the current objects context 
//    means its all [keys: values] 🔍🔍🔍

//2️⃣ but if you do console.log(this) outside the object or at globel level it gives 
//   { empty object} in the node environment or terminal.🔍🔍🔍

//3️⃣ and  if you do console.log(this) on the browser it will give you many events like 
//    {window object} {globel objects} etc.... 🔍🔍🔍

//4️⃣ and in browser {window object} is the gretest object amongst all other objects. 🔴🔴🔴

//5️⃣ If you do console.log(this) inside a "simple function" it gives you a lot of values.👇👇

// for example 👇👇👇

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

//6️⃣ If you do console.log(this.username) to access the value of username inside a
//    "simple function" it gives you undefined.👇 So from this example we got to know that 
//    " this."  method is only accessable in objects not in the functions.  

// for example 👇👇👇

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

//7️⃣ 👆 And if you do the same inside the Arrow function it also gives undefined. and if the arrow function is empty and then you try to console.log(this.) it will give you again 
// { empty object} 🔍🔍🔍

// for example 👇👇👇


const chai =  () => {
    let username = "hitesh"
    console.log(this);
}

// chai()


// -----------------------------------------------------------------------------------------

// Basic Arrow function 👇👇👇

// 🔻 In arrow function You have to use "explesit return" which means if you are using curly
//  braces then you have to use "return keyword" to run the code.

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3, 4))

// -------------------------------------------------------------------------------------

//🔻 In arrow function You can use "implesit return" means if the code is of only 1 line then 
// there is no need to use curly braces or "return keyword" or you can run the code by using 
// parentheis in the  place of curly braces it will give you the same output  🔍🔍🔍

// for example 👇👇👇

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )


//🔴👆 main point is if you wrap the code with curly braces then you have to write the 
// "return keyword" to run the code or if not wrap into the curly braces then you can use 
// the above syntex 🔍🔍🔍

// -------------------------------------------------------------------------------------

// in case of object If you are using the syntex "implesit return" which means without curly 
// braces and you are writting the syntex like  (num1, num2) => {username: "hitesh"}  this 
// it will not run the code and gives output undefined. because it is a wrong syntex.❌❌❌


// use this syntex to "implesit return" of  objects which is wrap the code tnto curly braces
//  of object and then wrap it with the parenthesis.✅✅✅ 

// for example👇👇👇

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))