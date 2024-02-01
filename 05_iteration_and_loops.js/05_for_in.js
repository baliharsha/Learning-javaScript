// 1️⃣const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb : "ruby",
//     swift: "swift by apple"
// }
// for (const key in myObject ) {
//     console.log(key);
//     }
//   👉👉 output=>
// js
// cpp
// rb
// swift

// 2️⃣for (const key in myObject ) {
//     console.log(myObject[key]);
//     }
    //👉 output=> javascript
    // C++
    // ruby
    // swift by apple

    // 3️⃣for (const key in myObject ) {
    //     console.log(`${key} sortcyt is for ${myObject[key]}`);
    //     }

        // 👉output=>
        // js sortcyt is for javascript
        // cpp sortcyt is for C++
        // rb sortcyt is for ruby
        // swift sortcyt is for swift by apple

    //    👉 🛑🛑for in on Array

    //    4️⃣const programming = ["js", "java", "py", "C", "C++"]
    //    for (const key in programming) {
    //     console.log(key)
    //         }
    //👉 output=>
    // 0
    // 1
    // 2
    // 3
    // 4

    // 🛑⭕🛑note = Bydefault array keys are 0,1,2,3,4
    //       but in object we can provide key by our own choise

//    5️⃣ const programming = ["js", "java", "py", "C", "C++"]
//        for (const key in programming) {
//         console.log( programming[key])
//             }
// 👉 output=>
// js
// java
// py
// C
// C++
//        🛑🛑 for in on map
// const map = new Map()
// map.set('IN', "India")
// map.set('Fr', "France")
// for (const key in map) {
//     console.log(key);
// }

// ⭕⭕⭕map are not iterable we cant apply loops on map