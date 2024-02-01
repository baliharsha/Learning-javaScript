//  ⭕⭕⭕for of loop:-
// ["", "", ""]
// [{}, {}, {}]

// const arr=[2,4,6,8,10]
// for (const i of arr) {
//     // console.log(i);
    
// }
//  output =>
//  2
//  4
//  6
//  8
// 10
// const name="Harsha Bali"
// for (const i of name) {
//     // console.log(i);
    
// }
// // output 
// H
// a
// r
// s
// h
// a
 
// B
// a
// l
// i

// 🛑🛑🛑🛑map => map is a object. 
        //   holds a key-value pairs
        //   insertion order of Key
        //   object and primitive valuse use as key or value
        // no duplicate value , only unique value in it

// const map = new Map()
// map.set('IN', "India")
// map.set('Fr', "France")
// console.log(map); 
// 👉👉output = Map(2) { 'IN' => 'India', 'Fr' => 'France' }

// const map = new Map()
// map.set('IN', "India")
// map.set('Fr', "France")
// map.set('IN', "India")
// console.log(map); 
// 👉👉output = Map(2) { 'IN' => 'India', 'Fr' => 'France' }
// ✅✅note = no duplicate allow

// for (const key of map) {
//     console.log(key)
//     }
// 👉👉   output= [ 'IN', 'India' ]
//             [ 'Fr', 'France' ]

// for (const [key, value] of map) {
//    console.log(key, '=' , value)
// }  👉👉output => IN = India
//             Fr = France 
//  🛑🛑🛑 note = destructre Array    

const myObject = {
    game1 : 'ludo',
    game2 : 'NFS'
}
for (const [key, value] of myObject) {
    console.log(key, '=' , value)
 }

// ✅✅ note => myObject is not iterable
