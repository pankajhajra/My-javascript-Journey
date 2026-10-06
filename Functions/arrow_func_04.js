const user = {
    username: "pankaj07",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username} welcome to website`);
        console.log(this)  //Perform everything in user
    }

}


user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage() //Sam welcome to website
// console.log(this)  // {} = empty





function Chai() {
    username = "Pankuuu"
    console.log(`Hello ! ${this.username}`)
}
Chai()



const pani = function () {
    let username = "pankuuu07"
    console.log(` Hey ! hello mr.${this.username}`)
}
pani()




////****Arrow function****/
const water = () => {
    let username = "Panuxyzzz"
    console.log(this.username) //undefined
}
water()


const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(3, 4)) //7




const twoSum = (numm1, numm2) => numm1 + numm2
console.log(twoSum(3, 4)) //7


//**Important Technique**
const addSum = (n1, n2) => (n1 + n2)
console.log(addSum(3, 4))  //7



const summ = (nuuum1, nuuum2) => ({username : "Pankajjj"})

console.log(summ(3, 4)) //7