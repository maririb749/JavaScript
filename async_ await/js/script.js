/*
O Async await deixa o código mais liner, legível. O encapsulamos 
numa função.
*/

const cep = `01001000`;

const fetchResult = fetch(`https://viacep.com.br/ws/${cep}/json/`);


//Async await

async function getJsonResponse(url) {
    const response = await fetch(url);
    const jsonBody = await response.json();
    return jsonBody;

}
/*

getJsonResponse(`https://viacep.com.br/ws/${cep}/json/`)
    .then(result => {
        console.log(result);
    });
    */

async function showCepData(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const json = await getJsonResponse(url);
    console.log(json);
}

showCepData(`01001000`);

console.log("A");

console.log("B");