//For Testing
//console.log("hello wolrd"); 

const accoundID = 1234567
let accountEmail = "GOURAV@123mail.com"
var accountPassword = "00099"
accountcity = "Bhopal"

let myAddress;
//it is possible to only declare a variable without initialing it
//but its value is always show undefined


/*accountcity = "Bhopal" ❌❌❌
console.log(accountcity);*/
// to create a variable without [var, let, const] it is working 
// but it is not the right way to declare variables


/*accoundID = 2 ❌❌❌
TypeError: Assignment to constant variable.*/
//constant ki value change nahi kr skte.


 accountEmail = "pintu@123mail.com"
 accountPassword = "00000"
 accountcity = "jammu"

 console.table([accoundID,  accountEmail, accountPassword, accountcity, myAddress])

// {} curly bracess means scope 

/* prevent to use [ var ]
because of issue in block scope and functional scope
*/