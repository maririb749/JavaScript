//selecionar elementos da página

const item1 = document.querySelector("li");

console.log(item1);
console.log(item1.innerHTML);
console.log(item1.outerHTML);
const items = document.querySelectorAll("li");

console.log(items);

const card1 = document.querySelector(".card");

console.log(card1);

const paragraph = document.createElement("p");
paragraph.innerHTML = "Description";
card1.appendChild(paragraph);

card1.classList.add("super-border");

const cards = document.querySelectorAll(".card");

console.log(cards);

//Aplicar  funções de array em uma coleção que não é 
//array deve-se transformar para array
Array.from(cards).map(item => {
    console.log(item.innerHTML);
});