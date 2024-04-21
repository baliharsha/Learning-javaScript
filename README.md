// even OR odd
let num = 6;
if(num % 2 == 0){
    console.log("even")
}else{
    console.log("false")

}
// zero, pos, neg
let number = 88;
if(number === 0){
    console.log("zero")
}else if(number > 0){
    console.log("pos")
}else{
    console.log("neg")

} 
// ------------------ques-----------------





// while. do while, for loop are same
// table of 5 without template literals
// for(let num = 1; num <= 10; num++){
    // console.log("5 * " + num  + " = " + 5 * num);   
// }

// pass by Value --->> a copy of the primitive value is created and passed to the function or assigned to a variable. any changes made to the copy do not affect the original value.

let a = 10
const modifyValue = (x) => (x = 20)
console.log(modifyValue(a));
console.log(a);

// pass by reference ---->> a reference to the memory location of the object is passed to the function or assigned to a variable. any change made to the object through this reference will affect the original object.

let obj = { id: 5, name: "hey" };
let obj1 = obj;
obj1.name = "rahul";
console.log(obj1); 