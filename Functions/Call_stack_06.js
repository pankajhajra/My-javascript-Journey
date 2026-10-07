let val1 = 20
let val2 = 30

function addNum(num1, num2) {
    let total = num1 + num2
    return total
}
// let SUM = addNum(val1, val2)
// console.log(SUM) 
let SUM = addNum(2,3)
// console.log(SUM) //5

//**2.**Memory phase :
///val1,val2, addSum, SUM  //Undeefines


//3. **Execution Phase**
/*
val1 = 20,
val2 = 30,
num1 = 2,
num2 = 3
*/
val1 = 15
val2 =3
function One(num1, num2) {
    let mult = num1 * num2;
    return mult
}
console.log(One(3,2))  //6
console.log(One(val1, val2))


function Onne() {
    let nummm = 12;
       console.log("RAM RAM")
    function Twoo() {
        console.log("SITA RAM");
    }
}

console.log(Onne(this.nummm()))