/*
Evento de um componente do sistema é uma ação que ele dispara
quando acontece algo específico da sua preferência
*/

const inputName = document.forms.cadastro.name;


/*
programar evento é inscrever funções para serem executadas
quando o evento ocorrer.
É inscrever funções no evento
*/

inputName.addEventListener('keyup', handleInputNameKeyUp);


//evento change muda o valor de um input, é muito
//util para fazer-mos validação de formulário

const inputmail = document.forms.cadastro.email;
inputmail.addEventListener('change', handleInputEmail1Change);


const btnSubmit = document.querySelector('[type="submit"]');
console.log(btnSubmit);

//Registrar algo para acontecer quando ciclar no botão

btnSubmit.addEventListener('click', handleBtnSubmitClick);

function handleBtnSubmitClick(event) {
    event.preventDefault();
    console.log(`Dados: ${inputName.value}, ${inputmail.value}`);
}


function handleInputNameKeyUp(event) {
    console.log(event.target.value);
}

function handleInputEmail1Change(event) {
    if (validateEmail(event.target.value)) {
        event.target.classList.remove("input-error")
    } else {
        event.target.classList.add("input-error")
    }
}

//Para controlar o que acontece quando clica no botão
function handleInputNameKeyUp(event) {
    console.log(event.target.value);
}

// https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
function validateEmail(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
}