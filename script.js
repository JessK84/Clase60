const primeroDiv = document.querySelector("#lista").children

for(let i = 0; i < primeroDiv.length; i++) {
    console.log(primeroDiv[i].innerText)
}


/*
// Forma 2
const lis = document.querySelectorAll("li");
lis.forEach(li => console.log(li.innerText));
*/

// EJERCICIO 2

const spanId = document.querySelector("#spanId");
const parent = spanId.parentElement;
const ulContainer = parent.children[2];
const ulChildren = ulContainer.children;
for(let li of ulChildren){
  console.log(li.innerText);
}

// const arrayBasadoEnNodeList = [...document.querySelectorAll("li")];