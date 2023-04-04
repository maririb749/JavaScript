function soma1(num1, num2) {
    return num1 + num2;

}
const soma2 = function(num1, num2) {
    return num1 + num2;
}

const soma3 = (num1, num2) => {
    return num1 + num2;
}

const soma4 = (num1, num2) => num1 + num2;

const dobro1 = function(num) {
    return num * 2;
}

const dobro2 = num => num * 2;

// Funções que não tem um retorno definido, por padrão
//retorna undefined

function mostrarPreco(preco) {
    console.log("PRECO = " + preco);
}

//Variaveis definidas dentro do escopo da função não vazam

function areaCirculo(raio) {
    var pi = 3.14;
    return pi * raio * raio;
}
console.log(pi)

//Funcões hoisting: funções no js são "movidas" para cima pelo 
//motor do Javascript

teste(10);

function teste(x) {
    console.log("TESTE = " + x);
}