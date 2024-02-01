// -------------------------------🔴 Switch  🔴------------------------------------


// In JavaScript, the switch statement is a control flow statement that allows you to 
// execute different code blocks based on the value of an expression. It provides a more 
// concise way to handle multiple conditions compared to a series of if-else statements. 
// Here's the basic syntax of a switch statement:👇👇👇

// switch (expression) {
//     case value1:
//       // code to be executed if expression matches value1
//       break;
//     case value2:
//       // code to be executed if expression matches value2
//       break;
//     // additional cases as needed
//     default:
//       // code to be executed if none of the cases match the expression
//   }
  

//🔻 Here's a simple example:👇👇👇

// let day = "Monday";

// switch (day) {
//   case "Monday":
//     console.log("It's the start of the week!");
//     break;
//   case "Tuesday":
//   case "Wednesday":
//     console.log("It's a weekday, but not Monday.");
//     break;
//   case "Thursday":
//   case "Friday":
//     console.log("It's almost the weekend!");
//     break;
//   case "Saturday":
//   case "Sunday":
//     console.log("It's the weekend!");
//     break;
//   default:
//     console.log("Not a valid day.");
// }

// In this example, the switch statement checks the value of the day variable and executes 
// the corresponding code block. The break statement is used to exit the switch statement 
// once a match is found. 🔍🔍🔍

// Note: Each case statement in a switch block is followed by the code to be executed if the
//  expression matches the value of that case. If there is no match, the default case (if 
// present) is executed. If no default case is provided and no match is found, the entire 
// switch statement does nothing. 🔍🔍🔍

// Also, it's important to mention that the switch statement compares values using the 
// strict equality (===) operator, so type and value must match for a case to be considered 
// a match. 🔍🔍🔍

//👉 if a "" switch case "" did not include "" break "" then all cases will be print after
//  that case which is not including break, therefore Mentioning ""BREAK""  is imp 🔴🔴🔴


// more example 👇👇👇


// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}