//Singleton

//Object Literals //Key-value pairs 
const mysym = Symbol("Key1")
const jsUser = {
    name: "Pankaj",  
    mysym: "myKey1",
    "full Name": "Pankaj Hajra",
    age: 20,
    email: "Pankaj @google.com",
    isLoggedIn : false,
    lastLogins: ["Monday", "Saturday"],
    
}


// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full Name"]) //Only way to access that
// console.log(jsUser.mysym)
// console.log(typeof (jsUser.mysym)) //As an string but we required symbola as dType

console.log(jsUser[mysym])


//Changing Values
jsUser.email = "Pankaj@07google.com"

//Freezing Values

// Object.freeze(jsUser)

jsUser.email = "panku@outlook.com"

console.log(jsUser.email)  ///panku@07google.com



//Object function 
jsUser.greeting = function () {
    console.log("Hello JS user")
}
jsUser.greetingTwo = function () {
    console.log(`Hello js user, ${this.name}`)
}

console.log(jsUser.greeting()) // hello js user
console.log(jsUser.greeting)  //Return

console.log(jsUser.greetingTwo())

