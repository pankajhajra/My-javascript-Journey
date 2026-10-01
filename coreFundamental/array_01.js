///array

const myArr = [0, 1, 2, 3, 4, "roy"] //Object //
console.log(myArr)
console.log(myArr[3])

const myarr2 = new Array(1, 2, 3, 4, 5);
console.log(myarr2)

console.log(myArr.includes(4))//true
const newArr = myArr.join() //into string
console.log(newArr)

/*
myArr.push(6);
myArr.pop()
console.log(myArr)
*/

///Slice , splice 
console.log("A ", myArr)
const arr = myArr.slice(1, 3) // index 0 to 2
console.log("B", arr)


const arr2 = myArr.splice(1, 3) //index 1 to 3
console.log("c", myArr) // C[0,4,roy]
console.log(arr2) 
