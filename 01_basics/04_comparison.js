// >
// <
// >=
// <=
// ==
// !=
//avoid these comparisonssss
//  --->> clean code 
console.log("2" > 1);
console.log(2 > "1"); 

console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)
//the reason is that the comparison and equality check ==/ === work differently
//> this convert null into 0

console.log(undefined > 0) //sbmein false
//===
//ismein conversion ho jata h
console.log("2" == 2)
//ismein ni hota

console.log("2" === 2)

