//sbse basic tareeka hain yehhh
//inner html mein poora tree traverse hota hain
function addLanguage(languagename) {
  let listItem = document.createElement("li");
  listItem.innerHTML = `${languagename}`;
  document.querySelector(".language").append(listItem);
}

addLanguage("ruby");
addLanguage("typescript");

//agar 1000 value hoti toh 1000 br tree traverse krna pdta mere bhaii

//optimized approach //dsa use krre h basically

function addLanguageOptimizely(languagename) {
  let li = document.createElement("li");
  let textNode = document.createTextNode(languagename);
  li.appendChild(textNode);
  document.querySelector(".language").appendChild(li);

}

addLanguageOptimizely("javaaa");


//editing

const abc = document.querySelector('.language').children[2];
abc.innerHTML = 'kshitij';
// abc.outerHTML = "<p> iaaaa </p>"

// let newli = document.createElement('li');
// newli.textContent = "MOJO"
// abc.replaceWith(newli)


//remove
abc.remove();