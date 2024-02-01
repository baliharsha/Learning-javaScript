//1️⃣ singleton object
// Object.create  👈👈👈  method use to create singleton object.  🔍🔍🔍

// What it is: A pattern to make sure you only have one instance of a particular thing. 🔍🔍🔍

// Example: Imagine a boss in a game. There's only one boss, 
// and you don't want two of  them running around.🔍🔍🔍

//______________________________*************________________________________________________

//2️⃣ object literals or simple objects
// {} method use to create simple objects. 🔍🔍🔍


// What they are: A way to quickly create simple objects without needing a whole 
// blueprint (class). 🔍🔍🔍

// Example: If you need a quick way to represent a person in code with a name and age,
//  you can use an object literal. 🔍🔍🔍

//______________________________*************________________________________________________

// ❗❗❗ In short, a singleton is about making sure there's only one of something, 
// while object literals are a quick way to create simple objects without a big setup. ❗❗❗


// Objects are created in pair of key and value for ex. { name: Gourav }🔍🔍🔍
// In object keys automatically act's like a string . ❗❗❗
// we can store any data-type in objects in the form of value. 🔍🔍🔍
// for example = we can store arrays, functions, object ,  string , numbers , boolean in the form of value in an object.  ❗❗❗


// Example of an object 👇👇👇

const JsUser = {
    name: "Hitesh",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//______________________________*************________________________________________________

//  ❓ how to access values from object ❓ 

// There are two 2️⃣ types from which we can access the values from an object. 👈👈👈


// 1️⃣ console.log(JsUser.email)
// output = hitesh@google.com

// objectKaNaam DOT objectKiKey  🔍🔍🔍 (Without space)

//2️⃣ console.log(JsUser["email"])
// output = hitesh@google.com

// objectKaNaam bigBrackets string Me objectKiKey  🔍🔍🔍 (Without space)he same output
//______________________________*************________________________________________________



//______________________________*************________________________________________________


// 🔻 highlights 🔍🔍🔍

//1️⃣ If there are multiple keys and vlues in an object you have to use comas , 
// after every pair  ❗❗❗

//2️⃣ both methods gives the same output ✅✅✅

//3️⃣ if you are using dot method, so there is no need to write the key in string to access value. ❓❓

//4️⃣ but if you are using bigBrackets method, then
//  we have to write the key into string to access value. ❓❓❓ 

//5️⃣ AND if the key is specially written into string formate in an object, 🔍🔍🔍
// then we are unable to access its value by dot method. 😵😵😵
// we have to use bigBrackets [ "key" ] and key into string method. ✅✅✅



//🔻 for example 👇👇👇

const person = {
     name       :  "Gourav" ,
    "full name" : "Gourav Singh",
     age        : 25
}
// ❌❌❌

// console.log(person.full name); 

// it gives error 
// output => SyntaxError: missing ) after argument list 


// ✅✅✅

// console.log(person["full name"]); 

// output => Gourav Singh



//______________________________*************________________________________________________




//______________________________*************________________________________________________


//      ***** interview question *****

// 🔻 how to use symbol in an object ❓❓❓

// 1️⃣ IF you want to use a symbol [data-type] which is created outside the object 🔍🔍🔍
// and, You want to use that symbol inside the object in a key value formate then, ❗❗❗

//2️⃣ you have to write the variable name into [] bigBrackets. at the place of key 🔍🔍🔍 

//3️⃣ And the same thing you have to follow at the time of acccessing the value of a symbol 
// which is variable name into bigBrackets [ VariableName ] ✅✅✅

//🔴🔴🔴 but not into the string formate as we access the values of other keys
//  into big Brackets with string [ "key" ] ❌❌❌❌ it thorws the syntex error.



// for example 👇👇👇


const mySymbols = Symbol("key1")

const systumm = {
    name           :  "Gourav" ,
    age            :   25,
    [mySymbols]    : "mykey1",
}

// console.log(systumm[mySymbols]) 
// console.log(systumm)

// output=>  { name: 'Gourav', age: 25, [Symbol(key1)]: 'mykey1' } 👈👈👈
// it is clearly mentioned symbol in data-Type 🔍🔍🔍


// ❌❌❌❌

// and if you did not use variable name into bigBrackets then it does not throw error.
// but it is not the correct way to use outsider symbol in an object. 
// and in output it does not mentioned sysmbol because it is working as a normal string key 
// because you did not use the correct syntex which is varible name into BigBrackets [] .

// read 👆👆👆


//______________________________*************________________________________________________


// how to change the values of an object ❓❓❓

systumm.name = "mayank" 

// console.log(systumm);

// output=> { name: 'mayank', age: 25, [Symbol(key1)]: 'mykey1' } 🔍🔍🔍


// const mySym = Symbol("key1")

const JsUsers = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    // [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

JsUsers.email = "hitesh@chatgpt.com"


// ❓❓❓ How to LOCK values in an object so that nobody will able to change object value 
// from outside the object ❓❓❓❓ 

// There is a property called  Object.freeze(OBJECT KA NAAM)

// after that if anyone change the value from outside the object ❗❗❗
// it won't be changed It does not throw any error but no changes will be applied. 🔍🔍🔍


// for example 👇👇👇

// Object.freeze(JsUsers)

JsUsers.email = "hitesh@microsoft.com"

// console.log(JsUsers); 👈👈👈


//❓❓❓  How to add functions in objects  ❓❓❓

JsUsers.greeting = function(){
    // console.log("Hello JS users");
}

// console.log(JsUsers.greeting);

// if you use greetings without  parenthesis () 
// it throws error which says [Undefined] ❌❌❌.

// so you have top use function name() with parenthesis 👇👇👇

// console.log(JsUsers.greeting());


JsUsers.greetingTwo = function(){
    // console.log(`Hello JS users, ${this.name}`);
}

// if you want to greet the person with name which is saved in above object  🔍🔍🔍🔍
// then you have to use bactick ` ` string interpulation method. 
// and then you can mention the key name with this dot [ this.name ] method. 
// inside ${} this sign. 👈👈👈👈

// when you want to metion the same object for which you created the function 🔍🔍🔍
// for that you have to use this dot [ this.KeyName ] method to access the values of object.


// console.log(JsUsers.greetingTwo());