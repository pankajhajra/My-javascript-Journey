function One() {
    const username = "hitesh"

    function Two() {
        const website = "YT"
        console.log(username)
    }
    // console.log(website) 
    Two()
}

// One()
if (true) {
    const username = "hitesh"

    if (username == "hitesh") {
        const website = "youtube"
        console.log(username + " " + website);
    }
    // console.log(website)
}
// console.log(username)


//+++++++++++++++++ Intresting ++++++++++++++++++


console.log(addone(5))  //6
function addone(num) {
    return num + 1
}
// console.log(addone(5)) 

console.log(addTwo(5))  //error
const addTwo = function(num){
    return num + 2
}

// console.log(addTwo(5)) //7