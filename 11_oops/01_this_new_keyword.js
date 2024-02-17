// 1️⃣ object literal

const user = {
    username: "harsha",
    loginCount: 8,
    signedIn: true,

    getUserDetailes: function() {
        console.log("got user details from databas");
        console.log(`username: ${this.username}`);
        console.log(this);

    }
}

console.log(this);
// 💛💛 This keyword is used for current context
// 👉👉 if you have an array in array's prototype we have a map object in a program a diff aray so if we use map who we find which arrys's map we are using thats why this keyword is used
// ✔1️⃣ in function context it gives us a output
// ✔2️⃣ but in global context [console.log(this)].....it gives us a empty object {}
  
 console.log(user.username);
 console.log(user.getUserDetailes());
 console.log(user["signedIn"]);
//  ----------------------------

// 2️⃣construted function

// 💛💛 new keyword is construtor function 
// 👉 new keyword allow to [ek hi object se multiple instance bana sako]
// 👉 new is used to create new context

// 💛💛 function la ek he global execution context hota hai whi run ho jata hai

function User (username, loginCount, isLoggedIn){
    myusername = username
}
// -----myname and this.username both are variable--------
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.isLoggedIn = isLoggedIn;
    this.loginCount = loginCount

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }

    return this
}
// 🛑🛑👉return this likho ya na likho ye implicitly define hota he hai.

// const userOne = User("harsha", 12, true)
// const userTwo = User("harsh", 11, false)
//  console.log(userOne);

// 🛑🛑🛑🛑 userOne Override the values - harsh, 11, false
// 🛑🛑🛑🛑thats why we use new keyword
// 🛑🛑🛑🛑construtor function gives you a new copy with the help of new keyword
 
const userOne = new User("harsha", 12, true)
const userTwo = new User("harsh", 11, false)
 console.log(userOne);
//  output - harsha, 12 , true
console.log(userTwo);
//  output - harsh, 11, false

// 1️⃣ jab bhi new keyword use krenge ek empty object create hota hai jisko instance bolte hai.
// 2️⃣constructor function call hota hai new keyword ki wjhe se
// jo bhi arrguments wagera hai usme pack krta hai aur apko de deta hai.
// 3️⃣this keyword mein jo bhi arrgument wagera pack rehtw h wo this mein inject ho jate hai.
// 4️⃣mil jate hai hume function ke ander

console.log(userOne.constructor);
// output= [function: user]