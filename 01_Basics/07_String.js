const name = "hitesh"
const repoCount = 50

//  ❌❌❌  Try Not to write this kind of code 
// in single '' or double " " inverted comas on any project ❌❌❌

// ▶ console.log(name + repoCount + " Value");


// ✅✅✅  Always use backticks ` ` string code it is more efficient 
// and you can directly use variable in ${} this sign and modify them
// through methods and function given by default ✅✅✅

// ▶ console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// 🟢🟢 for example 
// console.log(gameName.length);
// console.log(gameName.toUpperCase());🟢🟢


// const gameName = new String('hiteshhc') 🔍🔍🔍

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));


// const gameName = new String('hitesh-hc') 🔍🔍🔍

const newString = gameName.substring(0, 4)
console.log(newString);


// ✅✅ Slice me negative values bhi pass kr skte h but ❌❌substring me nahi

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))


// const gameName = new String('hitesh-hc-com') 🔍🔍🔍


console.log(gameName.split('-'));