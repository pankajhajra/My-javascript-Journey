//Dates

let myDate = new Date()
console.log(myDate.toString()) //web sep 30 2026 21:19:24  GMT+0530
console.log(myDate.toDateString());///WEd sep 30 2026
console.log(myDate.toLocaleString()) ///30/9/2026 9:21:00 pm

console.log(typeof(myDate)) ///Object

let myCreatedDate = new Date(2026, 0, 23) //month =>0  //yy/m/dd
console.log(myCreatedDate.toDateString());

let myNewDate = new Date(2026, 0, 23, 5, 3); //yy/m/dd/time
console.log(myNewDate.toLocaleString());

let myCreatedDate2 = new Date("2023-01-14") ///yy-mm-dd // 01 for jan
console.log(myCreatedDate2.toLocaleString()); //14/01/2023



let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate2.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); //Now (8+1) = sept (0 == jan)
console.log(newDate.getDay());



newDate.toLocaleString(`default`, {
    weekday : "long"
})