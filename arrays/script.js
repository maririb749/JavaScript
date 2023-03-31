//TAMANHO DO ARRAY

const valores = ["Maria", 37, false, 1.64];
const t1 = valores.length;

console.log(t1);

//REMOVER ELEMENTOS

const nomes = ["Maria", "João", "Ana", "Marcos"];
const r1 = nomes.pop(); //remove ultimo elemento
const r2 = nomes.shift(); //remove primeiro elemento

console.log("Teste pop e shift");
console.log(r1);
console.log(r2);
console.log(nomes);

//INSERIR ELEMENTOS

const altura = [1.65, 1.82, 1.7];
altura.push(1.75); //insere no final
altura.unshift(1.58); //insere no começo

console.log("Teste push e unshift");
console.log(altura);

//INSERIR E REMOVER GERAL

const letras = ["A", "B", "C", "D", "E", "F"];

letras.splice(2, 0, "X", "V");
console.log("Teste splice");
console.log(letras);


// CONCATENAR ARRAYS

const meninas = ["Maria", "Ana"];
const meninos = ["Joao", "Marcos"];

const todos = meninas.concat(meninos);
console.log("Teste concat");
console.log(todos);

//ACESSO E ATRIBUIÇÃO

const idades = [20, 30, 40, 50];

idades[1] = 38;
console.log("Teste acesso e atribuição");
console.log(idades);

//PERCORRER CADA ELEMENTO DO ARRAY

const frutas = ["Banana", "Laranja", "Uva"];

console.log("Teste percorrer array");
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// PERCORRER ARRAY COM FOR EACH

console.log("Teste percorrer array com forEach");
frutas.forEach(item => {
    console.log(item);
});