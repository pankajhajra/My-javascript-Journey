const myNums = [1, 2, 3, 4, 5, 6, 7,8,9,10];

// const newNums = myNums.filter((num) => num > 4);
// console.log(newNums);



///By using ForEach loops

const newNumms = []

myNums.forEach((num) => {
    if (num > 5) {
        newNumms.push(num)
    }
})
console.log(newNumms);