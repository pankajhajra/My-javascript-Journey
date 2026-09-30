const name = "ROY"
const id = 50
// console.log(name + id + " Value")

console.log(`Hello my name is ${name} and my class id is ${id}`)


let gameName = new String("SirJIOP"); 
console.log(gameName)//Browse

console.log(gameName[0]);
console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3))
console.log(gameName.indexOf('J'));



const newString = gameName.substring(0, 5);
const neewString = gameName.substring(5, 7);
const anotherString = gameName.slice(-1)
console.log(newString)
console.log(neewString)
console.log(anotherString);

newString1 = "   pankaj  "
console.log(newString1.trim());


const url = "https://panku.com/panku%20hajra"

console.log(url.replace('%20', '-'))
 


console.log(url.includes('panku')) //Check 
// console.log(url.split('-'))