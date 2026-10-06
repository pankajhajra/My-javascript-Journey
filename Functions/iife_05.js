// function Chai() {
//     console.log(`DB CONNECTED`);
// }
// Chai()




( (name) => {
    console.log(`DB Connected Two ${name}`);
})('panku')


function age(num) {
    console.log(`Your age is ${num}`);  //Name deffie as age
}
age(20);

((numm) => {
    console.log(`Your age is :  ${numm}`);
})(20);
    

((sum1, sum2) => {
    console.log(`Your sum is : ${sum1 + sum2}`);
})(20, 25);