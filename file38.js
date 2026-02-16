let d = new Date()// used most
console.log(d);              // date methods
//get methods
console.log(d.getDate());
console.log(d.getMonth());
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getTime());// it will print with serial number
console.log(d.getMilliseconds());
console.log(d.getDay());
console.log(d.getTime());
console.log(Date.now());

let d = new Date(2026,1,1,20,12,10) // manually create: year/ date / hour/ min/ sec :)
console.log(d);

let d1= new Date("February 16 2026 10:10:10") // another manual way 
console.log(d1);
console.log(d1.getMonth());
const d = new Date()
d.setFullYear(2025)
d.setMonth(11)// by these we can set date month year etc
