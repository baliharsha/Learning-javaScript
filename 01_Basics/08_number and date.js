const score = 400
// console.log(score);


//  This type of declairation and initialisation gives 100% surity.
//  to the dataType you want to use.  👇👇👇

// const balance = new Number(100) 👈👈👈
// console.log(balance);


// If we want to change number Datatype into String 👇👇👇

// You can use [ type of ] to check the data type of this. 

// console.log(balance.toString().length);👈👈👈 


// This method() used to provide values in decimal form.
//  usaully used in amounts calculation  🔍🔍🔍

// console.log(balance.toFixed(2));

const otherNumber = 123.8966

// This method() In JavaScript, the .toPrecision() method is used with numbers to format them with a specified precision. It allows you to control the total number of digits in a number, including both the integer and fractional parts. The method is applied to a numeric value and takes an argument specifying the desired precision. 🔍🔍🔍


// let num = 123.456789;
// let formattedNum = num.toPrecision(5); // Result: "123.46"


console.log(otherNumber.toPrecision(4));


// This method() used to provide comas , in values 🔍🔍🔍

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));





// +++++++++++++ Maths +++++++++++++++++++++++++++++


// [ Math ] is an object in itself and contains many functions and properties 🔍🔍🔍


// For expamle 👇👇👇

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6)); 
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));


// value of Math.random always comes between o to 1.🔍🔍🔍
//  for example 0.997698079


console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)