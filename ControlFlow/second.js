// const balance = 1000
//wrong practice
// if (balance > 500) console.log('test')
    


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if (userLoggedIn && debitCard && 2==2) {  // 2 out of 2 
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged In")
}



