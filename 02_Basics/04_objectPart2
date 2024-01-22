// How to create singleTon object ❓❓❓ 👇👇

// const tinderUser1 = new Object() 👈👈

// console.log(tinderUser1);


// How to create non-singleTon object or simple object❓❓👇👇

const tinderUser = {} 


tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// 👆👆👆 we can also put key: values in Object like this form without writing between 
// curly breses only we have to use { object Name dot key = value } ✅✅✅


// console.log(tinderUser);


//👇👇👇  If we want to store single or multiple objects inside an object then use 🔍🔍🔍

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// And to access the values of multiple objects 👇👇👇

// console.log(regularUser.fullname.userfullname.firstname);



//❗❗❗ How to combine objects like arrays❓❓❓


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//1️⃣ const obj3 = { obj1, obj2 }

//  👆👆👆 this was a wrong  method ❌❌❌


//2️⃣ Object.assign() method ✅✅✅

// Definition: In JavaScript, the Object.assign() method is used to copy the values of enumerable own properties from one or more source objects to a target object.

// Syntax: Object.assign(target, source1, source2, ...);

// Target Object:

//1️⃣ The target is the object to which properties will be assigned.
//2️⃣ It receives the properties from one or more source objects.
//3️⃣ The target object is modified in place.

// Shallow Copy:

// Object.assign() performs a shallow copy, copying only top-level properties.
// If properties are objects, their references are copied, not the nested objects themselves.

// Note: 🔍🔍🔍🔍

// To avoid modifying source objects, consider using an empty object as the target:
// const newObject = Object.assign({}, source1, source2);
// Use Cases:

// Merging objects. 🔍🔍🔍
// Creating a new object with combined properties.
// Understanding how Object.assign() works with the target object is crucial for effective object manipulation and data merging in JavaScript.

//  ❗❗❗   for example 👇👇👇 

// const obj3 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3);


// 3️⃣ spraed operators method ❗❗❗ most easy and used method in both 
// objects and arrays to merge ✅✅✅ 


const obj3 = {...obj1, ...obj2}
// console.log(obj3);



//👇👇👇 Example of Array of objects.  🔍🔍🔍 

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

//👇👇👇Syntex: How to access values from array of objects. 🔍🔍🔍

//🔻 ArrayName[ index Number Of Object which starts from 1 not from 0 ]dot Key  ❗❗❗

// 👇👇👇 example


users[1].email



// console.log(tinderUser);

//👇👇👇 some examples of methods to access the values from object 🔍🔍🔍 


//👇👇👇 for all keys it provides data in the type of Array,
//       So that we can easily apply loops on these.
// console.log(Object.keys(tinderUser));

//👇👇👇 for all values it provides data in the type of Array,
//       So that we can easily apply loops on these.
// console.log(Object.values(tinderUser));


//👇👇👇 for all enteries it provides data in the type of Array inside that array,it 
//  gives the key:values in single single array. So that we can easily apply loops on these.
// console.log(Object.entries(tinderUser));



//👇👇👇 to find properties like keys and values inside the object 🔍🔍🔍
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));