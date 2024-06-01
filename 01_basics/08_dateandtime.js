let date = new Date();

console.log(date.toString());
console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toJSON());
console.log(date.toLocaleDateString());

console.log(typeof date);
//  let myCreatedDate = new Date( 2024 , 0 , 2) //year , month , date , hours , min , sec
//  let myCreatedDate = new Date( "2024-1-2") //year , month , date
let myCreatedDate = new Date("1-2-2024"); //month,date,year

console.log(myCreatedDate.toLocaleDateString());

//fastest poll is the winner
const myTimeStamp = Date.now();
//badi si millisecond value aygii
console.log(myTimeStamp);

console.log(date.getMinutes());
console.log(date.getMonth() + 1);
console.log(date.getDate());

//to customize date
let n = new Date().toLocaleDateString("default", {
  weekday: "long",
});
