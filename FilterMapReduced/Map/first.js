const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const newNumms = myNums.map((num) => num + 10)
// console.log(newNumms)

// newNumms1 = myNums.map((num) => { return num + 10 }); // We can used



///Channing
const newNummms = myNums.map((num) => num * 10)  // multi by 10 
    .map((num) => num + 1)  //Then add 1
    .filter((num) => num >= 21) //Check by filter
    

console.log(newNummms);