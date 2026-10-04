const marvelHeroes = ["thor", "Loki", "IronMan"]
const dcHeroes = ['Batman', "SuperMan", "Flash"]


marvelHeroes.push(dcHeroes)
const allHeroes  = marvelHeroes.concat(dcHeroes)

// console.log(marvelHeroes);
// console.log(allHeroes)
// console.log(marvelHeroes[3][1])


const allNewHeroes = [...marvelHeroes, ...dcHeroes]
// console.log(allNewHeroes)


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5,]]]
const realAnotherArray = another_array.flat(Infinity)
console.log(realAnotherArray)

console.log(Array.isArray("Roy"))
console.log(Array.from("Roy"))
console.log(Array.from({name : "Roy"}));


///Convert into Arrays
let sc = 100;
let sc2 = 200;
let sc3 = 300;

console.log(Array.of(sc,sc2,sc3)) 

