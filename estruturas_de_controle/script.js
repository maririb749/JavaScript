const time = 10;

if (time > 12) {
    console.log("Boa tarde");

} else {
    console.log("Bom dia");
}

const time1 = 20;

if (time1 < 12) {
    console.log("Bom dia");

} else if (time1 < 18) {
    console.log("Boa tarde");
} else {
    console.log("Boa noite")
}

/* 
Swite case
*/

const week = 5;
switch (week) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça");
        break;
    case 4:
        console.log("Quarta");
        break;
    case 5:
        console.log("Quinta");
        break;
    case 6:
        console.log("Sexta");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Valor inválido");
}

let count = 4;
while (count > 0) {
    console.log(`COUNT = ${count}`);
    count--;
}

for (let i = 0; i < 4; i++) {
    console.log(`I = ${i}`);
}

let test = 4;
do {
    console.log(`TEST = ${test}`);
    test--;
} while (test > 0);