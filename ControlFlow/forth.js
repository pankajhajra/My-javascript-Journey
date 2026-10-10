//Truthy and Falsi Values

const userEmail = "panku07@google.com"
if (userEmail) {
    console.log("got user email");
} else {
    console.log("Don't got user email")
}
   
///inding the array is empty or not
const userEmail1 = [ ]
if (userEmail.length === 0) {
    console.log("Array is empty")
} else {
    console.log("Array is Empty ")
}
//falsy values

// false, 0 , -0, BigInt 0n, "", null, undefined, Nan


///Truthy values

// "0", "false", " ", [], {}, function(){}

const newObj = { }
if (Object.keys(newObj).length === 0) {
    console.log("Object is Empty")
}

//*********** Nullish coelescing operator  **********/


let val1;
// val1 = 5 ?? 10
// val1 = null ?? 11;
val1 = undefined ?? 11;

console.log(val1)


//***************** Terniary Operator *****************/


const iceCreamPrice = 100
iceCreamPrice <=80 ? console.log("Less Then 80") : console.log("More then 80")