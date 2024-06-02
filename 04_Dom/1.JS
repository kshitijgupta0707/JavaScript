// //sb kuch objects he hain 
// //1.) global object - window
// 2.) object window.document
// 3.) //direct access document
// console.dir(document) //isse windows ka he sb kuch ajayegal

// HTML COLLECTION IS NOT AN ARRAY BUT CAN BE CONVERTED
// //JUST BRACKET SE ACCESS AVAILABLE BAKI PROPERTIES NI H ARRAY KI


// document.getElementById('first heading').innerHTML = "<h1>chai aur code </h1>"

//poora tag mil jayega
document.getElementById('title')

document.getElementById('title').id

//bts document khta h  classname
document.getElementById('title').className

document.getElementById('title').getAttribute('id');

document.getElementById('title').getAttribute('class');

document.getElementById('title').setAttribute('class' , 'test');

document.getElementById('title').getAttribute('class');

document.getElementById('title').getAttribute('class');


const title =document.getElementById('title')

title.style.backgroundColor = 'green';
title.style.padding = "85px";
title.style.borderRadius = "85px";


//andar ka html bhi text format mein dega
//protects your html
//jb chnage kroghe toh proper html ghusa skte ismein retrun krte waqt

document.getElementById('title').innerHTML = 'iamkshitj' ;

//display only visible text
document.getElementById('title').innerText ;
//display all the text
document.getElementById('title').textContent ;




document.getElementsByClassName("")



//use in real world

// phla h1 dedega
//kuch b de skte class , id , h1 ,tag
document.querySelector('h1');
document.querySelector('#title');
document.querySelector('.bye');
document.querySelector('input[type = "password"]');
document.querySelector("li:last-child");
document.querySelector("li:first-child");
document.querySelector("li:nth-child()2");

//give node list //they are not pure aray sb function nhi hote sbke pass /
//prototype mein dkh lia kroo
//ismnie foreach loop extra hain
document.querySelectorAll('li').forEach((element) =>{

  element.style.color = "red";
});

//htmlcollection
let a =document.getElementsByClassName('listitem')
for (let index = 0; index < a.length; index++) {
  a[index].style.backgroundColor = 'white' 
}

//dono ko arraymein convert kr skte
let array = Array.from(a);
array.forEach((element) =>{
  element.style.padding = '10px '
})