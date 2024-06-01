// Be PRACTICALLLll
let array = [1,2,3,4,5,6,7,8,9]
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
}
for (let i = 0; i < 2; i++) {

    for (let j = 1; j < 6; j++) {

        console.log(
    ` ${i} * ${j} is ${i*j}`
        )
    }

}

//break and continue pta he hain

while (condition) {

}

//when you want to execute atleast once
do {

} while (condition);

//array specific looops

//for of
//array of objects
// [{},{} , {},{}]

// const obj = [1, 2, 3, 4, 5];

for (const index of obj) {
  console.log(index);
}
const greetings = "hello world";
for (const greet of greetings) {
  console.log(greet);
}

//objects are not iterable
//There is a different way for objects

// let me = {
//     'fullname': 'kshitij gupta',
//     age : 19,
//     profession : "web develpper"
// }

for (const [property , value] of me) {
    console.log(`Property = ${property} and value = ${value}`)
}








//Maps








// const map = new Map();
//all unique values
//order yd rkhta hain

map.set('in' , 'India')
map.set('us' , "united state of america");
map.set('fr' , 'france');
//ayga he ni
map.set('in' , 'India')
console.log(map);

for (const i of map) {
    console.log(i);
}

for(const [key , value] of map){
    console.log(`key = ${key} and value = ${value}`)
}

//for in loops s
//maps mein inmein ni hota
// keys uthataaa hain objects mein bhi and array mein index uthata h jo ki uski key he hain

//kese kre objects mein
let me = {
    'fullname': 'kshitij gupta',
    age : 19,
    profession : "web develpper"
}






//yha destructor nhi krna hota
//value key se ajati h
for (const properties in me) {
    console.log(`properties are ${properties} and values are ${me[properties]}`)
}





//in arays
//sirf indexes aate hain isse
let arr =["a", 'b', 'c ', 'd'];
for (const key in arr) {
   console.log(key);
}




//foreachloop
let coding = ['js', 'cpp', 'python' , 'java']




coding.forEach(element => {
    console.log(element);
})
coding.forEach(function n(element){
console.log(element);
})

let arrayOfObject = [
  {
    name: "kshiij",
    age: 19,
  },
  {
    name: "sankalp",
    age: 22,
  },
  {
    name: "ashish",
    age: 19,
  },
];

//it does not return any valuesss
//just for printing
  arrayOfObject.forEach((value , index) => {
    // console.log(value);
   
    console.log(`${index + 1} person : `)

    let keys = Object.keys(value)
    keys.forEach((element) => console.log(element + " = " + value[element]))

})
