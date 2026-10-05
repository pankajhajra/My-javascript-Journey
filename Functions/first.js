function SayHello(){
    console.log("hello brothers, I am pankaj Hajra!")
}

// SayHello // Refrance 
SayHello()




// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2)
// }
// const sum = addTwoNumbers(3, 4) //7
// addTwoNumbers(3, "4"); //34


function addTwoNumbers(num1, num2) {
    let sum = num1 + num2
    console.log("Sum is:")
    return sum
    console.log("hello")  //Not executed
}
const sum = addTwoNumbers(3, 9)
console.log("Sum", sum);



function addTwooNumbers(numm1, numm2) {
    return numm1 + numm2
}

function loginUserMessage(username) {
    // if (username === undefined)
    if(!username)
    {
        console.log("Please enter an userName")
        return     //only execute this when username is no defines
    }
    return `just logged in ${username}`
}


// console.log(loginUserMessage()); //undefines
console.log(loginUserMessage("Pankaj"));

