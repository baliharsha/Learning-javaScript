const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// 👆👆👆this is wrong way to merge 2 arrays
//  insteed of merge it creates arrays into array.


// examples of more methods 👇👇👇



// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// concat method used to merge 2 arrays 👆👆👆  
// to use concat method we have to create a new variable.


const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

// 👆👆👆 this [...elementName] triple dot + elementName is know as spread opperates. 🔍
// it is more reliable and easy to use and to merge 2 or more arrays into a single array.🔍
// this method is more efficient that concat method.🔍


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

// 👆👆👆 If an Array contains multiple Arrays inside it then,
//  This method Array.flat() is used to convert it into a single array.


console.log(Array.isArray("Hitesh"))

// 👆👆👆 This method [ ArrayKaNaam.isArray ] is used to check that it is an array or not? 


console.log(Array.from("Hitesh"))
// 👆👆👆 This method [ ArrayKaNaam.from ] is used to spread elements in an Array.  


console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

// 👆👆👆 This method [ ArrayKaNaam.of ] is used to 
// convert multiple elements in a new Array.  
