//setTimeout É uma função que executa uma função após um dado tempo em milissegundos.

function dizerOla() {
    console.log("Olá");
}

//setTimeout(dizerOla, 2000);

//ESPERA ASSÍNCRONA

function dizerBomDia(nome) {
    console.log("Bom dia " + nome);
}

setTimeout(() => {
    dizerBomDia("Maria");
    setTimeout(() => {
        dizerBomDia("João");
        setTimeout(() => {
            dizerBomDia("Maria");
        }, 2000);
    }, 2000);
}, 2000);

console.log("A");
console.log("B");