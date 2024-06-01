// kis tarah se store kia hain memory mein and kis tarah se access

//primitive  - call by value
//categories 7 - string , number , bool , null ,  undefined , symbol , bigint

const id = Symbol('123');
const id2 = Symbol('123');
// console.log(id == id2)
// console.log(id2)
 const bigInt = 1111111111111111111111111111n

// javascript is dynamically types language

//non primitive/Reference - call by reference
//3 - array objects functions

const heroes = ["shaktiman" , "superman" , "salmankafan"]

const person = {
    name: 'kshitij',
    age: 23,
}

//function ko variable mein store
const myFunction =function(){
    console.log("hello word");
}

// ****************************************************************************************************
//Memory
//stack(primitive) - ismein apko copy milta hain
let name = "kshitij"
let anothername = name
name = "gupta"
console.log(name + " " + anothername )
// heap(reference) - ismein reference milta hain
let user1 = {
    email: 'user@gmail.com',
    upi: "9129387444XX"
}
user2 = user1;
user1.email = "k";
console.log(user1);
console.log(user2);
``
 /*
   in refernce , w
  */