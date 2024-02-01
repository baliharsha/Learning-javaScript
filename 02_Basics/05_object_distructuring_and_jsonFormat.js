// How to destructure an objects ❓❓❓


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//👇👇👇 Normally we use this method to access the values from an object 

// course.courseInstructor

// but if there are many objects or we have to use that objectname and value so
// for our eaze we can destructure that value for example 👇👇👇 

const {courseInstructor} = course
// console.log(courseInstructor); 
 
//👆👆👆 create a new variable and write the name of key which you want to access the value 
// after that use equal to = sign and then write the name of that object. 🔍🔍🔍


//👆👆👆 if you feel that some key names or object names are lengthy or you do not want to 
// write that lengthy name again and again so use this method 👇👇👇 
// You can also change the name of that key and then you can directly able to access its value withiout writing full syntex. ✅✅✅🔍🔍🔍


const {courseInstructor: instructor} = course
console.log(instructor);

// ___________________________*********_____________________________________________________


// ❗❗❗ how to identify json formate ❓❓❓

// when their is something looks like object but the name is not there and also 
// the keys:values are writting in string formate then it is called json Data. 🔍🔍🔍

// in simple =>
//  1️⃣ object contains name json does not 
//  2️⃣ keys:values of object are not written in string but keys:values of json does.

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]