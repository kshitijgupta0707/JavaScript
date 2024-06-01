// const userEmail = "kshitijgupta0@gmail.com";

//string have some value - truth
//empty string -- false
//empty arrray --- true
if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}

//Falsy values

//false
//0
//-0
//BigInt 0n
//"" -- 0 length
//null
//undefined
//Nan

//Truthy values
// "0"
// 'false'
// " "
// []
// {}
// function(){}

//false === 0 
//false == ''
//0  == ''

if(array.length === 0){
    console.log(
        "Array is empty"
    )
}
if(Object.keys(emptyObject).length === 0){

}

//It will prefer to take not null value and if both are not null
//it will take the first value
//Nullish coalescing operator (??): null undefined

//used to handle errors 
let val1;
val1 = 5 ?? 10 //first value jayegi ismein
console.log(val1)
val1 = null ?? 10
console.log(val1)
val1 = 10 ?? null
console.log(val1)
val1 = undefined ?? 15 
console.log(val1)
val1 = undefined ?? 15 
//when you get response from datbase 
//2 response aa skte h
 //null bhi aa skta hain and undefined bhi

//terniary operator
// condition > true : false

const price = 100
 
price = '';
// price = '' ? con
price >= 90 ? console.log("greater than 90") : console.log("less than 90");