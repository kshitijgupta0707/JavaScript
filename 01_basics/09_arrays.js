
// let numbers = [1, 3, 5, 7, 9];

//add the element at last
// numbers.push(44);

//add the element in starting
// numbers.unshift(11);

//shift to pop from starting
//pop

//property length




//SLICE





//It return the new array with [s , e) without affecting the old array
// let n = numbers.slice(2, 4);
// console.log(n);
// console.log(numbers);



//SPLICE





// it is used to remove and add element in the array
// index , deletecount , add elements
//  numbers.splice(1, 3, 'a', 'v');
// console.log(numbers);


// let courses = [
//     { name: 'kshitij', roll: 36 },
//     { name: 'itij', roll: 22 }
//     , { name: 'sankalp', roll: 35, id: 2 }
// ];
// console.log(courses);
// console.log(courses[2]);
// console.log(
//     courses.includes({ name: 'kshitij', roll: 36 })
// );

// let obj = courses.find(function (element) {
//     return element.id == 2;
// }
// );
// console.log(obj);

// // function callback() {
// //     return this.id == 2;
// // }
// // let obj2 = courses.find(callback());

// // console.log(obj2);
// let inventory = [
//     { name: "apples", quantity: 2 },
//     { name: "bananas", quantity: 0 },
//     { name: "cherries", quantity: 5 },
// ];

// function callback(inventory) {
//     return inventory.name === "cherries";
// }

// console.log(inventory.find(callback));




// //chatGPT eg - customize behaviour
// // function doSomething(callback) {
// //     console.log("Doing something...");
// //     callback();
// // }
// // function customBehavior1() {
// //     console.log("Custom behavior 1");
// // }
// // function customBehavior2() {
// //     console.log("Custom behavior 2");
// // }

// // // Using doSomething with different custom behaviors
// // doSomething(customBehavior1);
// // doSomething(customBehavior2)
// // Function that takes another function as a parameter
