function calculateCartPrice(val1, val2,...num1) { ///rest
    return num1
}
//val1 = 100, val = 200

console.log(calculateCartPrice(100, 200, 300, 400, 500))




const user = {
    username: "RAM",
    rank: 1
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and rank is ${anyobject.rank}`);
}

handleObject(user)
handleObject({
    username: "sam",
    rank : 2
})


///In Arrays
const myNewArray = [200, 300, 400, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myNewArray)); //300



function handdleObject(getValues) {
    console.log(`Your user name is ${getValues.username1} Your rank is ${getValues.yourrank}`)
}

handdleObject({
    username1: "Pankaj",
    yourrank : 21
})

function handleNumbers(num) {
     console.log( `Your numbers is ${num.firstnums} and ${num.secondnums}`)
}

handleNumbers({
    firstnums: 21,
    secondnums : 1
})

