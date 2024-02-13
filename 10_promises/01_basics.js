// promises => the promise object represent the eventual completion of an async operation and its result value.
// three steps:-
//  1️⃣pending
//  2️⃣fullFilled 
//  3️⃣rejected

// promise is an object.

// .then() , .catch() ,  .finally()

// 👉⭕how to create a  promises

// 👉1️⃣ 

const promiseOne = new Promise(function(resolve, reject)  {
   
setTimeout(function(){
// database call, cryptography, network(async task)
    console.log('async task is complete');
    resolve()
}, 1000)
})
//  👉⭕comsumed promise
promiseOne.then(function() {
    console.log("promise consumed");
})

// Note:- resole - .then()
//        reject - .catch()
//  resole and reject are call back function 


// -----------OR----------------
//  👉2️⃣
new Promise(function(resolve, reject) {
    setTimeout(function(){
       console.log("async task 2") ;
       resolve()
    }, 1000)
 }).then(function(){
    console.log("async 2 resolved");
 })

//  👉3️⃣
 const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function (){
resolve({username: "chai", email: "chail@ex.com"})
    }, 1000)
 })
 promiseThree.then(function(user){
   console.log(user); 
 })

//  if any data come from backend you can handle as a object and console that object

// 👉4️⃣
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function (){
        let error = true
        if(!error) { 
resolve({username: "chai", password: "123"})
        } else {
            reject('ERROR: something went wrong')
        }
    }, 1000)
})
promiseFour
.then((user) =>{
    console.log(user);
    return user.username
}).then((username) =>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("the promise is either resolved or rejected "))

// // 👉5️⃣ async / await same as .then(), .catch()

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function (){
//         let error = false
//         if(!error) { 
// resolve({username: "js", password: "12"})
//         } else {
//             reject('ERROR: js went wrong')
//         }
//     }, 1000)
// })

//    async function comsumePromiseFive(){
//     const response = await promiseFive
//     console.log("response");
// }
// comsumePromiseFive()
// ------------------------

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function (){
        let error = true
        if(!error) { 
resolve({username: "js", password: "12"})
        } else {
            reject('ERROR: js went wrong')
        }
    }, 1000)
})

async function comsumePromiseFive(){
    try{ 
    const response = await promiseFive
    console.log("response");
}catch (error) {
    console.log(error);
}}
comsumePromiseFive()

defination:- callback function
             callback hell
             try, catch
             async, await
             resole .then()
             reject.catch()
             .finally()















