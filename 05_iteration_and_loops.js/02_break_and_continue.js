
//--------------------------------🔴  break and continue 🔴 ------------------------------


// defination:👇👇👇

// In JavaScript, `break` and `continue` are control flow statements that are often used 
// within loops, including `for` loops, to alter the normal execution flow. Here's how they 
// can be used in a `for` loop:

//1️⃣. **`break` statement:**👇

//    - It is used to terminate the loop prematurely when a certain condition is met.
//    - BREAK - will throw you out from the scope of that particular loop from where 
//              you used the BREAK statement. 🔍🔍🔍

//    - Example:👇👇👇

//     for (let i = 0; i < 5; i++) {
//         if (i === 3) {
//             break; // exit the loop when i is 3
//         }
//         console.log(i);
//     }


//     // Output: 0, 1, 2    👈👈👈
   

//2️⃣. **`continue` statement:**👇

//    - It is used to skip the rest of the code inside the loop for the current iteration and
//       move on to the next iteration.

//    - CONTINUE - will give an another chance to the loop to wriiten the next values.
                // of that particular loop and skips that value where you used the Continue 
                // keyword  🔍🔍🔍

//    - Example:👇👇👇


//     for (let i = 0; i < 5; i++) {
//         if (i === 2) {
//             continue; // skip the iteration when i is 2
//         }
//         console.log(i);
//     }


//     // Output: 0, 1, 3, 4  👈👈👈


// In the examples above:👆👆👆

// - In the `break` example, the loop is terminated when `i` is equal to 3.🔍🔍🔍
// - In the `continue` example, the loop skips the iteration when `i` is equal to 2. 🔍🔍🔍

//👆 These statements are not exclusive to `for` loops; they can also be used in other loop types like `while` and `do-while`. 🔍🔍🔍


// more examples of break and continue 👇👇👇


// // for (let index = 1; index <= 20; index++) {
// //     if (index == 5) {
// //         console.log(`Detected 5`);
// //         break
// //     }
// //    console.log(`Value of i is ${index}`);
    
// // }

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         continue
//     }
//    console.log(`Value of i is ${index}`);
    
// }