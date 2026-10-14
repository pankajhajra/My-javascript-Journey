const Array1 = [1, 2, 3, 4]
const initialValue = 0;
const sumWithInitial = Array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue, initialValue  
);

console.log(sumWithInitial)



const myNums = [1, 2, 3]
const myTotal = myNums.reduce(function (acc, current) {
    console.log(`acc : ${acc} and current : ${current}`)
return acc + current  /// acc + (mynums )
}, 0) /// initial 0 to acc 
console.log(myTotal)





let myNums1 = [1,2,4]
const myTotalSum = myNums1.reduce(
    (acc, current) => { return acc + current},0
)
console.log(myTotalSum)


const ShopingCart = [
    {
        iteam: "Sugar",
        price: 29
    },
    {
        iteam: "oil",
        price: 1599
    },
    {
        iteam: "milk",
        price : 299
    },
    {
        iteam: "groceries",
        price: 399
    }
]

const allShopping = ShopingCart.reduce((acc, iteam) => acc + iteam.price, 0)

const discount = allShopping * 0.1

const afterDiscount = allShopping - discount;

console.log(`sum total : ${allShopping}`);
console.log(`discount : ${discount}`);
console.log(`After discount : ${afterDiscount}`)