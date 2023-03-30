/*
console.log("Um string literal pode ficar entre aspas duplas");
console.log('Um string literal pode ficar entre aspas simples');
console.log(`Um string literal pode ficar entre crases`);

console.log("Concatenação e interpolação");
const num = 14.5;
console.log("O valor do produto é " + num);
console.log('O valor do produto é ' + num);
console.log(`O valor do produto é ' ${num}`);
*/

/*
const num = 14.5;
console.log("Conversão entre number e string");

const str1 = num.toString();
console.log(`Tipo de ${str1} : ${typeof str1}`);

const str2 = num.toFixed(2);
console.log(`Tipo de ${str2} : ${typeof str2}`);

const num1 = Number("14.5");
console.log(`Tipo de ${num1} : ${typeof num1}`);

const num2 = parseInt("21");
console.log(`Tipo de ${num2} : ${typeof num2}`);

const num3 = parseInt("21", 16);
console.log(`Tipo de ${num3} : ${typeof num3}`);

const num4 = parseFloat("21.34", 10);
console.log(`Tipo de ${num4} : ${typeof num4}`);

*/

const str = "Maria Silva  ";

console.log(`const str = "Maria Silva  "`);


console.log(`toLowerCase: ${str.toLowerCase()}`);
console.log(`toUpperCase: ${str.toUpperCase()}`);

console.log(`charAt: ${str.charAt(3)}`);

console.log(`charAt: ${str[2]}`);

console.log(`replace: ${str.replace("i","$")}`);

console.log(`replace: ${str.replace(/i/g,"$")}`);

console.log(`lenght: ${str.length}`);

console.log(`indexOf: ${str.indexOf("i")}`);

console.log(`lastIndexOf: ${str.lastIndexOf("i")}`);

console.log(`substring: ${str.substring(3,9)}`);

const data = "14/10/2021";
const mes = Number(data.substring(3, 5));
console.log(mes);

const valor = 200.99;
const novoValor = valor.toString().replace(".", ",");
console.log(novoValor);

console.log(`substring: ${str.trim()}`);