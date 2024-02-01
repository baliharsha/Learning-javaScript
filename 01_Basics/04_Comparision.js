
// example of comparisons 👇👇👇

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);
 
                            //  ❌❌❌

// Always try to avoid these types of comparisons or comparison between different data-types 
// These are  called [Loose Equality] double equals-to [ == ] only check the values not the data-type and
// These are  called [Strict Equality] triple equals-to [ === ] always check the data-types and is safer

                          // 🔍🔍🔍

// Use == if you want a loose comparison with type coercion.
// Use === if you want a strict comparison without type coercion.

                            // ✅✅✅

// It is generally recommended to use strict equality (===) because it avoids unexpected results due to type coercion. When you use ===, you explicitly check for both value and type equality, which can lead to more predictable and safer code.


//  *****coercion ["कोअर्शन" (koarshan)] defination and meaning ****

// Coercion in programming is like automatic conversion. It happens when the computer changes one type of data into another without you specifically telling it to do so. This can occur when you use different types of data together in an operation, and the computer tries to make them work together. There are two types of coercion: implicit (automatic) and explicit (manual). Implicit coercion happens automatically, while explicit coercion is when you intentionally convert one type to another using functions or operators.


//example of loose equality [ == ] 👇👇

// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);


//example of Strict equality [ === ] 👇👇

// === 

console.log("2" === 2);  

// output:(false) because data-type is different.