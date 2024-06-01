// // function call(paramters){


// // }
// // call(arguments);

// function loggedIn(username){
//     // or username == undefined
//     if(!username ) {
//         console.log("Please enter a username");
//         return;
//     }
//     console.log(
//     ` Thanks for logging in  ${username} `
//     );
// }
// loggedIn(
//     'kshitij'
// )
// loggedIn()



// //default value
// function loggedIn(username = "kj"){
//         console.log( ` Thanks for logging in  ${username}`);
// }
// loggedIn()

// //... rest operator ... -> depend on use case
// function calculateCartPrice(...num1){
//  return num1    
// }
// console.log(calculateCartPrice(200 , 400 , 400 , 600))

// function calculateCartPrice(a , b,...num1){
//  return num1
// }

// const user = {
//     name: 'kshitij', 
//     price: 199
// }
// function handleObject(anyObject){
//     console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`)
// }
// handleObject(user);

//hoisting
// All function declaration goes on top of code
// except when you assign the function to the variable then it remain at the same location







//arrow function







// const user = {
//     username: "kj",
//     price: 199,
//     welcomeMessage: function(){
//         console.log(`${this.username}, welconme to websitee`)

//         console.log(this);
//     }
// }




// this -> to refer the current context





// user.welcomeMessage()
// user.username = 'sam';
// user.welcomeMessage()

//vvvimppppp
// console.log(this); // node mein empty object global mein koi context nhi h
//but browser ke andar global object hain --> windows --- iske andar he sb kuch hota hain



// function chai(){
//     console.log(this); //bhut sri values - settimeout , peroformatance etc
//     let username = "ksj"
//     console.log(this.username); //undefined ayga
// }

// chai(); 

// let abc = function(){
//     console.log(this); //bhut sri values - settimeout , peroformatance etc
//     let username = "ksj"
//     console.log(this.username); //undefined ayga
// }

//arroy functions
// let abc = () => {
//     console.log(this); //bhut sri values - settimeout , peroformatance etc
//     let username = "ksj"
//     console.log(this.username); //undefined ayga
// }




// let f = (num1 , num2) => {
// return num1 + num2
// }
//upar wala he h --> implicit return
//explicit return specially return likhna pdta hain

// let f = (num1 , num2) =>  num1 + num2
//or
// let f = (num1 , num2) =>  (num1 + num2)
//curly brace use ---> toh return hogaaa  ---> react mein kaafi use


//if object return krna hogaa
// let f = (num1 , num2) =>  ({username: "kshitij"}) 






//concept
// Immediately invoked function expression(IIFE)
// jese he function likha usse execute karana hain
//and to save from being pollluted by global scope
//eg ---database connection --- jese he application start ho



(function db(){
    console.log("data base cnncted")
})();
//semicolon yha lagana hota hain bs hehehehhehheh



((name)=>{
    console.log(`data base cnncted ${name}`)
})('kshitij');