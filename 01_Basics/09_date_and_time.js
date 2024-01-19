// *** Dates *** 

// Type of Date=>  In JavaScript, a Date is an object. ✅✅✅

// In JavaScript, a Date object represents a specific point in time. 
// This point is measured in milliseconds from the start of January 1, 1970, 
// in Coordinated Universal Time (UTC). This starting point is known as the epoch. 👈👈👈

// Here's a simple example of creating a Date object and accessing its value: 👇👇👇


// Creating a Date object with the current date and time 🔍🔍🔍
const currentDate = new Date();

// Getting the number of milliseconds since the epoch 🔍🔍🔍
const millisecondsSinceEpoch = currentDate.getTime();

// console.log(millisecondsSinceEpoch);

// This millisecondsSinceEpoch value can be used to compare, manipulate, or perform various operations related to time in JavaScript. 🔍🔍🔍


// some more examples 👇👇👇

let myDate = new Date()
// console.log(myDate); 
// output => 2024-01-17T20:11:59.832Z 👈



// Methods and functions used with dates 🔍🔍🔍 👇👇👇


// console.log(myDate.toString());
// output => Wed Jan 17 2024 20:12:52 GMT+0000 (Coordinated Universal Time) 👈

// console.log(myDate.toDateString());
// output =>  Wed Jan 17 2024 👈


// console.log(myDate.toLocaleString());
// output =>  1/17/2024, 8:12:52 PM 👈


// console.log(typeof myDate);
// output =>  object 👈


// To pass dates manually Examples 👇👇👇

// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate);
// output=> 2023-01-23T00:00:00.000Z  👈❌ not a clear date 🔍🔍🔍


// So we have to use methods here are examples 👇👇👇


// let myCreatedDate = new Date(2023, 0, 23,)
// console.log(myCreatedDate.toDateString());

// output=> Mon Jan 23 2023 ✅✅✅

// 👆👆👆 From this example we got know that
//  months are started in js by [ 0 ] in array formate.  ❗❗❗

// More examples 👇👇👇


// 👇👇👇 if we want date + time manually  🔍🔍🔍


// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toLocaleString());

// output=> 1/23/2023, 5:03:00 AM 👈👈👈


// 👇👇👇 if we want date in the format of [ yyyy-mm-dd ]  🔍🔍🔍


// let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString());

// output=> 1/14/2023, 12:00:00 AM 👈👈👈
// And in this format [ yyyy-mm-dd ]  months are started in js by [ 01 ]. ❗❗❗


// 👇👇👇 and in india we follow the format of [ mm-dd-yyyy ]  🔍🔍🔍

// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

// output=> 1/14/2023, 12:00:00 AM 👈👈👈



//  *** Time *** ❗❗❗❗


// 🔍🔍🔍 Few more methods  👇👇👇


//👇👇👇  This time comes into mili-seconds from
//  the epoch time and date [ 01 jan 1970 ]🔍🔍🔍

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);

// Output=> 1705524816173 👈👈👈👈


//👇👇👇 If you want to compare time in mili-seconds then use this method. 🔍🔍🔍

// let myTimeStamp = Date.now()
// let myCreatedDate = new Date("01-14-2023")
// console.log(myTimeStamp); 👈👈👈
// console.log(myCreatedDate.getTime()); 👈👈👈


//👇👇👇  This time comes into mili-seconds 🔍🔍🔍

// let myTimeStamp = Date.now() 
// console.log(myTimeStamp.getTime());

//👇👇👇  And if you want to change it from mili-seconds into seconds then use 🔍🔍🔍

// let myTimeStamp = Date.now() 
// console.log(Math.floor(Date.now()/1000));


// Few more methods 👇👇👇


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `


//🔍🔍🔍 If You want to more customize the LocalString Method then use this 👇👇👇

newDate.toLocaleString('default', {
    weekday: "long",
    
})