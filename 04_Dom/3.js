//Khali div create hogya
const div = document.createElement('div');

div.className = "main"
div.id = Math.floor(Math.random() * 10 + 1);

div.setAttribute("title"  , "generated  title");
div.style.backgroundColor = "green"
div.style.padding = "12px"


div.innerText = "chai aur code";

//kuch b krlo
// const addText  = document.createTextNode("chai aur code");
// div.appendChild(addText);


//uppar wala div memeory m h abhi
//document ko bolo attach kro

document.body.append(div);
