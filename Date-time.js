//++++Dates++++//

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.getFullYear());
// console.log(myDate.getUTCMonth());
// console.log(myDate.getDay());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString())

// let myCreateDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toLocaleString())

// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")

// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// '${newDate.getDay()} and the time'

newDate.toLocalString('default',{weekday: "long"})



