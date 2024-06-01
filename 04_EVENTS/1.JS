// let a = [1, [0, 0], 3, 4, 5];
// console.log(a);

// let b = JSON.parse(JSON.stringify(a));
// //it only deep copy the one level and rest are shallow copied


// b[1][1] = 10;
// console.log(b);
// console.log(a);


//  a = [1,[0,0],2, 3, 4, 5];
// console.log(a);


//  b = a.slice();
// //it only deep copy t he one level and rest are shallow copied


// b[1][1] = 10;
// console.log(b);


// console.log(a);



let a = [
  { roll: 23, age: 10 },
  { roll: 24, age: 11 },
  { roll: 25, age: 2 },
]

let b = a.filter((element)=> {
    return element.roll >=24;
});
console.log(b);