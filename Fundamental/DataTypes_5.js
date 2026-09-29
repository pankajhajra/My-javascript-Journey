// #Primitive DataTypes

//7 types : String,Number,Boolean, null , Undefines, Symbol , BigInt

const score = 100
const scoreValue = 100.3

const isLoggedValue = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); ///false
///eg. BigInt
const BigInt = 1246677323235353;
console.log(typeof (BigInt));


//Refrence (Non - Primitive)
//Array, object  , Function

const Protectors = ["Kanha ji", "ShyamJi", "Maa", "Mydad"]
//Object
let Myobj ={
    name: "Pankaj",
        age: "20"
}
//Function
const myFunction = function () {
    console.log("Hello World");
}
console.log(typeof (myFunction));//Funcion


//Stack(Primitive), Heap(Non-Primitive)

let myChannel = "MyNameIs_Pankaj"

let anotherChannel = myChannel;
anotherChannel = "ChaiAurCode"
console.log(myChannel);
console.log(anotherChannel);

//Heap
let userOne = {
    email: "Userr@gmail.com",
    Upi:  "User@ybl"
}

let userTwo = userOne

userTwo.email = "Pankaj@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);