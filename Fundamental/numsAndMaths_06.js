const  balance = new Number(300);
console.log(balance);
console.log(balance.toString())
console.log(balance.toFixed(2))




const otherNums = 123.8966
console.log(otherNums.toPrecision(3)) //124 (Maybe roundup ) in 3 words

console.log(otherNums.toPrecision(4)); //124.9
console.log(otherNums.toPrecision(3)); //124


const hundred = 1000000;
console.log(hundred.toLocaleString()) //by default usa
console.log(hundred.toLocaleString('en-IN'))


// +++++++++++  Maths ++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.9)) /// 5
console.log(Math.ceil(4.2)); /// >>4 == 5
console.log(Math.floor(4.6))// <<4 == 4
console.log(Math.min(3, 4, 1, 4, 0.99)); //0.99
console.log((Math.random()) ); // 0 to 1  


const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)


