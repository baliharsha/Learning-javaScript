// *********************** Operations ***********************


// In JavaScript, the term "operations" can refer to a variety of actions or tasks performed on data, variables, or objects. Here are some common types of operations in JavaScript:

 1. **Arithmetic Operations:**
//    - Addition (`+`): Adds two values.
//    - Subtraction (`-`): Subtracts the right operand from the left operand.
//    - Multiplication (`*`): Multiplies two values.
//    - Division (`/`): Divides the left operand by the right operand.
//    - Modulus (`%`): Returns the remainder of the division of the left operand by the right operand.

//    Example: ```javascript
//    let result = 10 + 5; // result is 15
//    ```

 2. **Assignment Operations:**
//    - Assignment (`=`): Assigns the value on the right to the variable on the left.

//    Example:  ```javascript
//    let x = 10; // assigns the value 10 to variable x
//    ```

 3. **Comparison Operations:**
//    - Equality (`==` or `===`): Checks if two values are equal.
//    - Inequality (`!=` or `!==`): Checks if two values are not equal.
//    - Greater than (`>`), Greater than or equal to (`>=`), Less than (`<`), Less than or equal to (`<=`): Compare numeric values.

//    Example:  ```javascript
//    let isEqual = (5 === "5"); // isEqual is false (strict equality)
//    ```

 4. **Logical Operations:**
//    - Logical AND (`&&`), Logical OR (`||`): Combine boolean values.
//    - Logical NOT (`!`): Negates a boolean value.

//    Example:  ```javascript
//    let result = (true && false); // result is false
//    ```

 5. **String Operations:**
//      Concatenation (`+`): Combines two strings.

//    Example:  ```javascript
//    let greeting = "Hello" + " " + "World"; // greeting is "Hello World"
//    ```

 6. **Typeof Operation:**
//    - `typeof`: Returns a string representing the type of a variable.

//    Example:   ```javascript
//    let type = typeof 42; // type is "number"
//    ```

// These are just a few examples, and JavaScript supports a wide range of operations for various data types and purposes. Understanding these operations is crucial for writing effective and expressive JavaScript code.



let value = 3
let negValue = -value
// console.log(negValue);



//example of operations 👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇


// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

//  console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion



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