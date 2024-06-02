//relation
     const parent = document.querySelectorAll(".parent");

     //give all the chilren of parent in html collection 
   const children =  parent.children
   console.log(parent)
   console.log(parent.children)
   console.log(parent.firstElementChild)
   console.log(parent.lastElementChild)
   console.log(parent.children[3])

   for (let i = 0; i < parent.children.length; i++) {
    console.log(parent.children[i]);
   }


   const dayone = document.querySelector('.day')
   console.log(dayone);

   dayone.parentElement
   dayone.nextElementSibling



   //yeh poora tree structrue ka data deta hain
   //text cmmment node  line break everything
   console.log("nodes " , parent.childNodes);
