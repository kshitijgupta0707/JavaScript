
//numbers
const score = 400;

const balance = new Number(score);

console.log(balance.toString());

//kinne deciman numkber chiye - gst calculation
console.log(balance.toFixed(2));

//kinne digit chiye vo bataata hain yeh
balance.toPrecision(3);
const hundred = 1000000;
console.log(hundred.toLocaleString('en-IN'));
 console.log(Number.MAX_SAFE_INTEGER);



 //************************************maths libraray****************************************************** */
 console.log(Math);
//  console pe likhgo kaafi detail mein aygaa

 //abs
 //.PI

//  console.log(Math.abs(-4));
 //no decimal
//  console.log(Math.round(4.3));
//  console.log(Math.ceil(4.3))
//  console.log(Math.floor(4.3))
 
// .sqrt()
// .pow()
// .min(array)

//best use
// 0 - 1 tak kuch bhi
// console.log(Math.random())

// console.log((Math.random() * 10) + 1) // + 1 tak
// console

// //0.04 - 0
// Math.floor((Math.random() * (max - min + 1)) + min)


const min = 100
const max = 200

for(let i = 0 ; i < 100 ; i++){
    console.log(Math.floor((Math.random() *(max - min)) + min)); // ---> [100,199]
 }